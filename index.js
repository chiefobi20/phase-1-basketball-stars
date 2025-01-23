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
const newPlayerForm = document.getElementById('new-player')
    newPlayerForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const newNameInput = document.getElementById('new_name')
        const newTeamInput = document.getElementById('new_team')
        const newDraftInput = document.getElementById('new_draft')
        const newNumberInput = document.getElementById('jersey_number')

        const newPlayer = {
            name: newNameInput.value,
            team: newTeamInput.value,
            draft: newDraftInput.value,
            number: newNumberInput.value
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
                })
            }
            else{
                alert("Error: Must Add Player!")
            }
        })
    })

    newPlayerForm.reset()


