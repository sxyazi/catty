const debug = require('./debug')

const testerView = document.createElement('webview')
const devtoolView = document.createElement('webview')

testerView.src = 'about:blank'
document.body.appendChild(testerView)
document.body.appendChild(devtoolView)


const browserStart = code => {
    const browser = testerView.getWebContents()
    browser.devToolsWebContents = devtoolView.getWebContents()
    browser.openDevTools()

    testerView.getWebContents().executeJavaScript(code)
}

const browserStop = () => {
    testerView.loadURL('about:blank')
    testerView.reload()
}

module.exports = { browserStart, browserStop }
