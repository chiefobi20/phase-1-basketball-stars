fetch('http://localhost:3000/basketballPlayers')
.then(response => response.json())
.then(basketballData => {
    basketballData.forEach((player) => {
        addBasketballPlayerImageToDiv(player)
    })
})

function addBasketballPlayerImageToDiv(player){
    const playerImageElement = document.createElement('img')
    playerImageElement.src = player.image
    const nbaPlayersDivElement = document.getElementById('nba-players')
    nbaPlayersDivElement.appendChild(playerImageElement)
}
















// //assestment stuff
// // const sport = "Soccer"

// function playSport(sport){
//     console.log("It's time to play" + sport)
// }

// const myFunc = function(){
//     return 'I am having a blast !'
// }

// myFunc()

// const num = 9

// function newValue(){
//     const anotherNum = 10
//     return num * anotherNum
// }

// newValue(90)

// const foods = ['Cheeseburger']
// foods.push('Pizza')

// foods.forEach((food) => {
//     `I love ${food}`
// })

// const newID = document.querySelector('#title-text')

// newID.addEventListener('click',() => {
//     console.log("Hello, flatiron!")
// } )
