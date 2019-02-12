export default [
  {
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click(item, focusedWindow) {
      if (focusedWindow) focusedWindow.reload()
    }
  },
  {
    label: 'Toggle Developer Tools',
    accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
    click(item, focusedWindow) {
      if (focusedWindow) focusedWindow.webContents.toggleDevTools()
    }
  },
  { type: 'separator' },
  {
    role: 'resetzoom'
  },
  {
    role: 'zoomin'
  },
  {
    role: 'zoomout'
  },
  { type: 'separator' },
  {
    role: 'togglefullscreen'
  }
]
