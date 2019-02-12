import { Menu } from 'electron'
import { fileMenu, devtoolsMenu } from './menus'

const mainMenu = [
  {
    label: 'File',
    submenu: fileMenu
  },
  {
    label: 'DevTools',
    submenu: devtoolsMenu
  }
]

export default class MenuStrip {

  static activate() {
    let menu = Menu.buildFromTemplate(mainMenu)
    Menu.setApplicationMenu(menu)
  }

}
