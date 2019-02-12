import { dialog } from 'electron'
import ProjectManager from '../ProjectManager'

export default [
  {
    label: 'Open project...',
    accelerator: 'CmdOrCtrl+O',
    click(item, focusedWindow) {
      dialog.showOpenDialog(focusedWindow, {
        properties: ['openDirectory']
      }, (filePaths) => {
        ProjectManager.openDirectory(filePaths[0], (err, file) => {
          if (err) throw err
          focusedWindow.webContents.send('project-opened', file)
        })
      })
    }
  },
  {
    label: 'Recent Projects',
    submenu: [
      {
        label: 'Hier ist nichts.'
      }
    ]
  }
]
