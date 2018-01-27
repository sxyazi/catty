
module.exports = () => {
    mainWindow.webContents.send('event-run', { tab: 0, type: 'browser' })
}

