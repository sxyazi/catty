let ul, cb, cou = 0

const { addHistory, lastHistory, removeHistory, fuck } = require('./history')

const initTab = (t, c) => {
    t.addEventListener('dblclick', addTab)
    ul = t, cb = c, addTab()
}

const addTab = () => {

    const li = document.createElement('li')
    li.innerHTML = '<span></span><span class="close"></span>'
    ul.appendChild(li)

    const all = ul.querySelectorAll('li'), n = all.length - 1
    all[n].setAttribute('tid', ++cou)
    all[n].addEventListener('click', function (e) {
        if (e.target.className !== 'close') {
            switchTab(this.getAttribute('tid'))
        }
    })

    const [ title, close ] = all[n].querySelectorAll('span')
    title.innerText = `Untitled-${cou}`
    close.innerHTML = '&times;'
    close.addEventListener('click', function () {
        removeTab(this.parentNode.getAttribute('tid'))
    })

    switchTab(cou)

}

const switchTab = n => {
    addHistory(n)

    // Remove the className of all elements
    for (let x of ul.querySelectorAll('li')) {
        x.className = ''
    }

    const li = ul.querySelector(`li[tid='${n}']`)
    if (li) {
        li.className = 'active', cb(n, 'switch')
    }
}

const removeTab = n => {
    const li = ul.querySelector(`li[tid='${n}']`)
    ul.removeChild(li), cb(n, 'remove')

    removeHistory(n)

    const last = lastHistory()
    if (last) {
        switchTab(last)
    }

}

module.exports = { initTab, addTab, removeTab }
