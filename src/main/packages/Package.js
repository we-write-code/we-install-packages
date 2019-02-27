export default class Package {

  // TODO: Clarify if manager subclasses should be stored or "enum" values
  constructor(name, version, packageManager) {
    this.name = name
    this.version = version
    this.packageManager = packageManager
  }

}
