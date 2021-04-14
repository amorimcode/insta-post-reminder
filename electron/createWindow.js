const { BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
      width: 250,
      height: 310,
      
      frame: false,
      resizable: false,
      fullscreenable: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    // win.loadURL('https://support.microsoft.com/pt-br/windows/gestos-do-touchpad-para-windows-10-a9d28305-4818-a5df-4e2b-e5590f850741')
    win.loadFile('../index.html')

    return win
  }

  modules.exports = createWindow()