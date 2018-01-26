const { ipcMain } = require('electron')

global.shared = {
}


ipcMain.on('set-data', (err, data) => {
    console.log(err, data)
})

