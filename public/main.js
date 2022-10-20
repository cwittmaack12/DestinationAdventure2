const rollbar = require('rollbar')

let price1 = document.querySelector('.trip1price')

const uBroke = evt => {
    alert("You're too broke for this fool!")
}

price1.addEventListener('click', uBroke)



let price2 = document.querySelector('.trip2price')

const uWin = evt => {
    
    alert("You won a free trip!  Email me us your social.")
}

price2.addEventListener('click', uWin)


let price3 = document.querySelector('.trip3price')

const uLose = evt => {
    alert("No kids allowed!")
}

price3.addEventListener('click', uLose)


let price4 = document.querySelector('.trip4price')

const yo = evt => {
    alert("No peeing in the pool!")
}

price4.addEventListener('click', yo)