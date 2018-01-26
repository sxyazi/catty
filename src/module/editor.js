const path = require('path')
const loader = require('monaco-editor/min/vs/loader')

const uriFromPath = p => {
    let pathName = path.resolve(p).replace(/\\/g, '/')
    if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName
    }

    return encodeURI(`file://${pathName}`)
}

loader.require.config({
    baseUrl: uriFromPath(path.join(__dirname, '../../node_modules/monaco-editor/min'))
})

// workaround monaco-css not understanding the environment
self.module = undefined

// workaround monaco-typescript not understanding the environment
self.process.browser = true

// open the devtools panel
// const remote = require('electron').remote
// remote.getCurrentWindow().openDevTools()

module.exports = c => new Promise(resolve => {
    loader.require([ 'vs/editor/editor.main' ], () => {
        resolve(monaco.editor.create(c, {
            value: [
                'function x() {',
                '\tconsole.log("Hello world!")',
                '}'
            ].join('\n'),
    
            language: 'javascript'
        }))
    })
})
