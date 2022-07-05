
function saturdayFun(event = "roller-skate") {
    return (`This Saturday, I want to ${event}!`)
}

function mondayWork(toDo = "go to the office") {
    return (`This Monday, I will ${toDo}.`)
}

function wrapAdjective(result = "*"){
    return function (emphatic = "a hard worker") {
        return `You are ${result}${emphatic}${result}!`
    }
}

