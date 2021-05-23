const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
           'Unit Conventer App',
        {
            horizontalLayout: 'full',
            font: 'Nancyj-Underlined'
        }
        )
    )
}

module.exports = {
    getTitle
}