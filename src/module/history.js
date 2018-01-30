let list = []

const addHistory = n => lastHistory() != n && list.push(n)
const lastHistory = n => list.slice(-1).pop()

const removeHistory = n => list = list.filter(x => x != n)

module.exports = {
    addHistory, lastHistory, removeHistory, fuck:()=>list
}
