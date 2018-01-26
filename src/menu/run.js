// const { ipcMain } = require('electron')

// ipcMain.on('event-run', (e, code) => {
//     // console.log('run javascript', mainWindow.webContents.executeJavaScript(`${code}`))
// })

module.exports = () => {
    mainWindow.webContents.send('event-run', { tab: 0, type: 'browser' })
}

