import fs from 'fs'
import path from 'path'

export default class ProjectManager {

  static openDirectory(dir, callback) {
    fs.readdir(dir, (err, items) => {
      if (err) callback(err)
      for (let item of items) {
        let filePath = path.resolve(dir, item)
        let stats = fs.lstatSync(filePath)
        if (stats.isFile()) {
          let file = fs.readFileSync(filePath, 'utf8')
          callback(null, file)
        }
      }
    })
  }

}
