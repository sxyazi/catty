const { Menu, MenuItem } = require('electron')

const template = [
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'delete' },
            { role: 'selectall' }
        ]
    },
    {
        label: 'View',
        submenu: [
            { role: 'forcereload' },
            { role: 'toggledevtools' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    {
        label: 'Product',
        submenu: [
            {
                label: 'Run',
                accelerator: 'CmdOrCtrl + R',
                click: require('../menu/run-browser')
            },
            {
                label: 'Run with NodeJS',
                accelerator: 'CmdOrCtrl + Shift + R',
                click: require('../menu/run-node')
            }
        ]
    }
]

exports.init = () => {
    Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}

