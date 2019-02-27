import fs from 'fs'
import path from 'path'
import PackageManager from './PackageManager'

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

}
