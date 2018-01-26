const { ipcRenderer } = require('electron')

const events = {
    node: [],
    browser: []
}

exports.node = c => events.node.push(c)
exports.browser = c => events.browser.push(c)


ipcRenderer.on('event-run', (e, data) => {
    events[data.type][data.tab](data.tab)
    // ipcRenderer.send(data.tab, editor[data.tab].getValue())
})
