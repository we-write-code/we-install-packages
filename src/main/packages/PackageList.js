import Package from './Package'
import NpmManager from '../packageManagers/NpmManager'
import PipManager from '../packageManagers/PipManager'

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

    for (let key of Object.keys(data)) {
      packageList.add(new Package(key, data[key], NpmManager))
    }

    return packageList
  }

  // TODO: Add extraction from referenced dependency files
  // TODO: Add extraction from setup.py or similar variants
  static extractFromPip(data) {
    let packageList = new PackageList()

    for (let line of data) {
      let data = line.trim()

      // Tentative solution
      // Explanation of regex:
      // ^((?:\w+-?)*\w+) -> Package name consisting of groups of characters and digits connected with a hyphen (-)
      // \s? -> Optional space between package name and version specifier
      // [!=~<>][=] -> Control characters for version specification
      // \s? -> Optional space between control characters and version numbers
      // [^#\s]+ -> Version number (literally: anything besides whitespace and # to ignore trailing comments)
      let match = new RegExp(/^((?:\w+-?)*\w+)\s?([!=~<>][=]\s?[^#\s]+)?/, 'g').exec(data)
      if (match) packageList.add(new Package(match[1], match[2], PipManager))
    }

    return packageList
  }

}
