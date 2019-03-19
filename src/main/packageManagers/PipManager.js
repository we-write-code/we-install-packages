import fs from 'fs'
import path from 'path'
import PackageManager from './PackageManager'
import PackageList from '../packages/PackageList'

export default class PipManager extends PackageManager {

  // TODO: Overhaul simplistic pip dependency file detection (e.g. to detect dfs not named 'requirements.txt'
  // TODO: Add dependency file detection for setup.py or similar variants
  static detectDependencyFile(files, dir) {
    for (let file of files) {
      let filePath = path.resolve(dir, file)
      let stats = fs.lstatSync(filePath)

      if (stats.isFile() && file === 'requirements.txt') return filePath
    }
  }

  static decodeDependencyFile(filePath) {
    let stats = fs.lstatSync(filePath)

    if (stats.isFile()) {
      let lines = fs.readFileSync(filePath, 'utf8').toString().match(/^.+$/gm)

      if (lines) return PackageList.extractFromPip(lines, filePath)
    }
  }

}
