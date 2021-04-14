const { create } = require('domain')
const { app } = require('electron')
const path = require('path')

function App() {
//  createWindow()
 const win = require('./createWindow')
 const tray = require('./Tray.js')

}

app.whenReady().then(app)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.dock.hide()
