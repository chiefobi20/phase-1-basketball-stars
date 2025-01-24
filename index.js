const nbaPlayersDivElement = document.getElementById('nba-players')
const catalogDiv = document.getElementById('ball-catalog')
const playerDisplayDiv = document.getElementById('player-display')
const basketballImage = document.getElementsByClassName('display-player')[0]
basketballImage.addEventListener('mouseover', () => {
    playerDisplayDiv.style.textAlign = "center"
    console.log(playerDisplayDiv)
})


fetch('http://localhost:3000/basketballPlayers')
.then(response => response.json())
.then(basketballData => {
    handleDisplay(basketballData[0])

    basketballData.forEach((player) => {
        addBasketballPlayerImageToDiv(player)
    })
})

const handleDisplay = (player) => {
    console.log(player)

    basketballImage.src = player.image

    const playerName = document.getElementById('name-display')
    playerName.textContent = player.name

    const playerTeam = document.getElementById('team-display')
    playerTeam.textContent = player["team(s)"]

    const playerDraftInfo = document.getElementById('draft-display')
    playerDraftInfo.textContent = player["draft year & pick"]

    const playerJerseyNumber = document.getElementById('number-display')
    playerJerseyNumber.textContent = player["jersey number"]

}

function addBasketballPlayerImageToDiv(player){
    const playerImageElement = document.createElement('img')

    playerImageElement.src = player.image
    playerImageElement.addEventListener('click',() => {

        handleDisplay(player)
    })
    const nbaPlayersDivElement = document.getElementById('nba-players')
    nbaPlayersDivElement.appendChild(playerImageElement)

}
const newPlayerForm = document.getElementById('new-player')
    newPlayerForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const newNameInput = document.getElementById('new_name')
        const newTeamInput = document.getElementById('new_team')
        const newDraftInput = document.getElementById('new_draft')
        const newNumberInput = document.getElementById('jersey_number')
        const newImageInput = document.getElementById('new_image')


        const newPlayer = {
            "name": newNameInput.value,
            "team(s)": newTeamInput.value,
            "draft year & pick": newDraftInput.value,
            "jersey number": newNumberInput.value,
            "accolades": "",
            "bio": "",
            "image": newImageInput.value
        }

        fetch('http://localhost:3000/basketballPlayers',{
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body:JSON.stringify(newPlayer)
        })
        .then(response => {

            if(response.ok){
                response.json().then(newPlayerData => {
                    addBasketballPlayerImageToDiv(newPlayerData)
                    newPlayerForm.reset()
                })
            }
            else{
                alert("Error: Unable to Add Player")
            }
        })
    })






