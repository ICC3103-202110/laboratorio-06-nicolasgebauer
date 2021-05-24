const {getTitle} = require('./view')
const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app (state, update, view) {
    while(true){
        const {model, currentView} = state
        const {title, table} = currentView

        //Input/Output
        console.clear()
        console.log(title)
        printTable(table)

        //ASKING
        const {input1, input2} = await inputForm(model)
        const {input3, input4} = await listForm(model)
        const updateModel = update(model, input1, input2, input3, input4)
        state = {
            ...state,
            model: updateModel,
            currentView: view(updateModel)
        } 
    }
   
}

module.exports = {
    app
}