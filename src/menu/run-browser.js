
module.exports = () => {
    mainWindow.webContents.send('event-run', { type: 'browser' })
}

