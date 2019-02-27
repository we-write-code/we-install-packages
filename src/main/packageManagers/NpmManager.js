import fs from 'fs'
import path from 'path'
import PackageManager from './PackageManager'
import PackageList from '../packages/PackageList'

/**
 * Checks if the given content of a dependency file is valid
 * @param content The content of the dependency file as a string
 * @returns {[validity, data]} A tuple containing a boolean representing the validity and the as JSON parsed
 * file content (or null if validity is false)
 * @private
 */
function _validateDependencyFile(content) {
  try {
    let data = JSON.parse(content)

    if (data['name'] && data['version']) {
      return [true, data]
    }
  } catch (err) {
    if (err instanceof SyntaxError) return [false, null]

    throw err
  }
}

// At the moment, WIP is quite strict regarding naming of the dependency file for npm
// TODO: Maybe make this more flexible and allow varying file names and just detect file by decoding
export default class NpmManager extends PackageManager {

  static detectDependencyFile(files, dir) {
    for (let file of files) {
      if (file === 'package.json') {
        let filePath = path.resolve(dir, file)
        let stats = fs.lstatSync(filePath)

        if (stats.isFile()) {
          let data = fs.readFileSync(filePath, 'utf8')

          if (_validateDependencyFile(data)[0]) return filePath
        }
      }
    }

    return null
  }

  static decodeDependencyFile(filePath) {
    if (typeof filePath !== 'string') throw new Error(`${filePath} is not a string`)

    if (path.parse(filePath)['base'] !== 'package.json') {
      throw new Error(
        `File given is no correct dependency file (${path.parse(filePath)['base']} instead of 
        'package.json')`
      )
    }

    if (!fs.lstatSync(filePath).isFile()) throw new Error('Directory given, not file')

    let data = fs.readFileSync(filePath, 'utf8')
    let [validity, jsonifiedData] = _validateDependencyFile(data)

    if (!validity) throw new Error('Dependency file contains no valid JSON')

    // TODO: Clarify if method should also return dev-dependencies
    return PackageList.extractFromNpm(jsonifiedData['dependencies'])
  }

}
