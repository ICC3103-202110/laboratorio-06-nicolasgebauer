const {getTitle} = require('./view')
const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app (state, update, view) {
    const {model, currentView} = state
    const {title, table} = currentView

    //Input/Output
    console.clear()
    console.log(title)
    printTable(table)

    //ASKING
    const {input1, input2} = await inputForm(model)
    console.log(input1, input2)
    const {leftUnit, rightUnit} = await listForm(model)
    console.log(leftUnit, rightUnit)
}

module.exports = {
    app
}