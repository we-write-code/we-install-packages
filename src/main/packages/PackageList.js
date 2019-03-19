import path from 'path'
import fs from 'fs'
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
const _pipReferenceRegex = /-r\s+(\S+\.txt)/

function _beautifyRegexResult(result) {
  return [result].reduce((acc, val) => acc.concat(val), [])
}

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
  static extractFromPip(data, filePath, visitedFiles = [], packageList = new PackageList()) {
    visitedFiles.push(filePath)

    for (let line of data) {
      let data = line.trim()

      let [isReference, referencePath] = _beautifyRegexResult(data.match(_pipReferenceRegex))

      // How much will symlinks fck me up?
      if (isReference) {
        referencePath = (path.isAbsolute(referencePath)) ? referencePath : path.join(path.dirname(filePath), referencePath)
        if (fs.lstatSync(referencePath).isFile() && !visitedFiles.includes(referencePath)) {
          let lines = fs.readFileSync(referencePath, 'utf8').toString().match(/^.+$/gm)
          for (let pkg of this.extractFromPip(lines, referencePath, visitedFiles)) {
            packageList.add(pkg)
          }
        }

        continue
      }

      let [isPackage, name, version] = _beautifyRegexResult(data.match(_pipPackageRegex))

      if (isPackage) packageList.add(new Package(name, version, PipManager))
    }

    return packageList
  }

}
