import fs from 'fs'
import path from 'path'

export default class ProjectManager {

  static openDirectory(dir, window) {
    fs.readdir(dir, (err, items) => {
      if (err) throw err
      for (let item of items) {
        let filePath = path.resolve(dir, item)
        let stats = fs.lstatSync(filePath)
        if (stats.isFile()) {
          let file = fs.readFileSync(filePath, 'utf8')
          window.webContents.send('project-opened', file)
        }
      }
    })
  }

}
