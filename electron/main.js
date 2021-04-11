const { create } = require('domain')
const { app } = require('electron')
const path = require('path')

function App() {
 createWindow()
 const win = require('./createWindow')
}

app.whenReady().then(app)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
