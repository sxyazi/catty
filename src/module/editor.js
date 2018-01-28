const monaco = require('./monaco')

let ctn, cur, ins = []

const createEditor = (c, n) => {

    // Set the current editor
    cur = n

    // Hide all other editors
    for (let x of c.querySelectorAll('editor')) {
        x.style.display = 'none'
    }

    // The instance already exists
    if (ins[n]) {
        ins[n].domElement.style = 'block'
        return
    }

    let editor = document.createElement('editor')
    editor.setAttribute('eid', n)
    c.appendChild(editor)

    editor = c.querySelector(`editor[eid='${n}']`)
    return monaco(editor)
        .then(e => ins[n] = e)
        .then(() => editor.style.display = 'block')
}

const destroyEditor = (c, n) => {
    delete ins[n]
    c.removeChild(c.querySelector(`editor[eid='${n}']`))
}

const getEditor = n => ins[n]
const currentEditor = () => ins[cur]

module.exports = {
    createEditor, destroyEditor,
    getEditor, currentEditor
}
