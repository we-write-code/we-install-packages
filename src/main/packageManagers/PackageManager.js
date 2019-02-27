export default class PackageManager {

  static detectDependencyFile(files, dir) {
    throw new Error(`You must implement this (missing in class ${this.name})`)
  }

  static decodeDependencyFile(filePath, dir) {
    throw new Error(`You must implement this (missing in class ${this.name})`)
  }

}
