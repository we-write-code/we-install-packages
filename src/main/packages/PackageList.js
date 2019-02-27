import Package from './Package'
import NpmManager from '../packageManagers/NpmManager'

export default class PackageList extends Set {

  static extractFromNpm(data) {
    let packageList = new PackageList()

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
