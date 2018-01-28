const { ipcRenderer } = require('electron')

const events = {
    node: null,
    browser: null,

    nodeStop: null,
    browserStop: null
}

exports.node = c => events.node = c
exports.browser = c => events.browser = c

exports.nodeStop = c => events.nodeStop = c
exports.browserStop = c => events.browserStop = c

ipcRenderer.on('event-run', (e, data) => {
    events[`${data.type}Stop`]()
    events[data.type]()
})
