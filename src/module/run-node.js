const debug = require('./debug')

const fs = require('fs')
const crypto = require('crypto')
const { spawn } = require('child_process')

// Create a temp filename
const tempName = () =>
    require('os').tmpdir() + '/catty' + crypto.randomBytes(4).readUInt32LE(0)


let filename, nodeProcess, devtoolWindow

const nodeStart = code => {

    filename = tempName()
    fs.writeFileSync(filename, code)

    nodeProcess = spawn('node_modules/.bin/electron', [ '--inspect=127.0.0.1:33182', filename ], { detached: true })

    nodeProcess.stderr.on('data', function handler (data) {

        nodeProcess.stderr.removeListener('data', handler)

        const url = String(data).match(/chrome-devtools:\/\/.*/)
        if (url && url[0]) {
            devtoolWindow = window.open(url[0])
        } else {
            nodeStop()
            alert('Execution failed: Maybe port 33182 is occupied.')
        }

    })

}

const nodeStop = () => {
    if (nodeProcess) {
        devtoolWindow.close()
        process.kill(-nodeProcess.pid)
        require('fs').unlinkSync(filename)

        nodeProcess = null, devtoolWindow = null
    }
}


const { app } = require('electron').remote
app.on('before-quit', nodeStop)


module.exports = { nodeStart, nodeStop }
