import Package from './Package'
import NpmManager from '../packageManagers/NpmManager'
import PipManager from '../packageManagers/PipManager'

// Explanation of regex:
/*
(\w+-?)*\w+)            -> Package name (words connected with hyphens)
\s*                     -> Optional whitespace between package name and version specifier
(!=|~=|(>|<|==)=?)      -> Version specifier (!=, ~=, ==, ===, <, >, >=, <=)
\s*                     -> Optional whitespace between version specifier and version number
\d+[^#,\s]+             -> Version number (no validation, must not be directly followed by # or ,)
(\s*,\s*(!=|~=|(>|<|==)=?)\s*\d+[^#,\s]+)* -> Additional versions separated by , and optional whitespace
(\s+#.*)?$              -> Trailing comments (will be ignored)
 */
const _pipPackageRegex = /^((?:\w+-?)*\w+)(?:\s*((?:!=|~=|(?:>|<|==)=?)\s*\d+[^#,\s]+(?:\s*,\s*(?:!=|~=|(?:>|<|==)=?)\s*\d+[^#,\s]+)*))?(?:\s+#.*)?$/

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

  // TODO: Add extraction from setup.py or similar variants
  // TODO: Missing support/handling for options, referenced dependency files, referenced constraint files and links/particular files
  static extractFromPip(data) {
    let packageList = new PackageList()

    for (let line of data) {
      let data = line.trim()

      let [isPackage, name, version] = [data.match(_pipPackageRegex)].reduce((acc, val) => acc.concat(val), [])

      if (isPackage) packageList.add(new Package(name, version, PipManager))

    }

    return packageList
  }

}
