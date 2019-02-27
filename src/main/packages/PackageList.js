import Package from './Package'
import NpmManager from '../packageManagers/NpmManager'

export default class PackageList extends Set {

  constructor(iterable, type = 'default') {
    super()
    this.type = type
  }

  static extractFromNpm(data, type = 'default') {
    let packageList = new PackageList([], type)

    if (typeof data === 'string') {
      data = JSON.parse(data)
    }

    // TODO: see Package.js/constructor
    for (let key of Object.keys(data)) {
      packageList.add(new Package(key, data[key], NpmManager))
    }

    return packageList
  }

}
