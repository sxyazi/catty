const { ipcRenderer } = require('electron')

const events = {
    node: null,
    browser: null,

    node_stop: null,
    browser_stop: null
}

exports.node = c => events.node = c
exports.browser = c => events.browser = c

exports.nodeStop = c => events.node_stop = c
exports.browserStop = c => events.browser_stop = c

ipcRenderer.on('event-run', (e, data) => {
    events[`${data.type}_stop`](data.tab)
    events[data.type](data.tab)
})
