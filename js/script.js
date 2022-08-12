// Have a starting “cash” amount for player
// assign the value for the cards
// player places bet amount
// player clicks deal button 
// Dealer and player dealt cards
// Player can hold or get another card
// Compare the cards.
// If player get 21 or closest to 21: player wins
// If Cpu get 21 or closest to 21: CPU wins
// If tie deal again
// Have message update on who wins
// Update “cash” amount player has
// Game ends when player quits or balance goes to 0


/*----- constants -----*/


/*----- app's state (variables) -----*/
let playerCards;
let computerCards;
let PlayerWins;
let computerWins;
let message;
let sumCards;
let playerSumCard;
let computerSumCard;
let compArr = []
let playArr = []

/* -----Cached Element Refernces ------*/
const playerCardsEl =document.querySelector('#player > h1')
const computerCardsEl =document.querySelector('#computer > h1')
const playerSumCardEl = document.querySelector('#player-card-2')
const computerSumCardEl = document.querySelector('#cpu-card-2')
const dealBtn = document.getElementById('deal')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
const restartBtn = document.getElementById('restart')
const messageEl = document.getElementById('message')

/* -----event Listeners ------*/
dealBtn.addEventListener('click', deal)
hitBtn.addEventListener('click', function(){hit(playerCards)})
standBtn.addEventListener('click', stand)
restartBtn.addEventListener('click', restart)
/* -----functions ------*/
init()

function init() {
playerCards = []
computerCards = []
playerSumCard = 0
computerSumCard = 0
message = "Deal the Cards"
render()

}

function render () {
playerCardsEl.textContent = playerCards.join(' ')
playerSumCardEl.textContent = calculateHandValue(playerCards)
computerCardsEl.textContent = computerCards.join(' ')
computerSumCardEl.textContent = calculateHandValue(computerCards)
let psum = calculateHandValue(playerCards)
let cpsum = calculateHandValue(computerCards)
messageEl.textContent = message
}

function getRandomCard() {
    return Math.floor(Math.random() * 11 + 1) 

}

playerCards = [getRandomCard(), getRandomCard()]

computerCards = [getRandomCard(), getRandomCard()] 

function calculateHandValue(arr) {
    console.log(arr, "arr chack")
    let total = 0
    // debugger
    arr.forEach (card => {
        total += card
        console.log (card, "card con")
    }) 
    
    console.log (total, "total----------=---------")
    playerSumCard = total
    console.log(playerSumCard, "ps inside")
}
   console.log(playerSumCard, "sum outside")
    console.log(playerCards, "play Caaaaaaaaaaaaaarrrrrrrddddsss")

function deal() {
    playerCards = [getRandomCard(), getRandomCard()]

    computerCards = [getRandomCard(), getRandomCard()] 
    console.log(playerCards)
    console.log(calculateHandValue(playerCards), "summmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
    // playerSumCard += (calculateHandValue(playerCards))
    // console.log (playerSumCard, "summmmmmmmmmmplayerrrrrrrrrrrrrrrrrrrrrrrrrrr")
    // computerCards = [getRandomCard(), getRandomCard()] 
    
    computerSumCard += calculateHandValue(computerCards)
    console.log(playerSumCard, "ps inside")
    render ()

}


function hit(arr) {
   let hitcard = getRandomCard()
//    arr.push(hitcard)
    console.log (playerCards, "bf player card")
    playerCards.push(hitcard)
    console.log (playerCards, "af player card")
   console.log (hitcard, "hitcard console")
   render()
}
function dealerHit(arr) {
    let hitcard = getRandomCard()
 //    arr.push(hitcard)
     console.log (computerCards, "bf CPU card")
     arr.push(hitcard)
     console.log (computerCards, "Af CPU card")
    console.log (hitcard, "hitcard console")
    render()
 }
function stand() {
    dealerlogic()
    decideWinner()
    render()
}

function restart() {
    init()

}

function dealerlogic() {
    while (calculateHandValue(computerCards[0] +computerCards[1]) < 16) {
        dealerHit(computerCards)
    }
    render()
    }  

    console.log(computerCards)
      

   

function decideWinner() {
    console.log("=>", playerSumCard, computerSumCard)
    console.log("hellloooooooooooooooooooo0")
    // if (playerSumCard > 21){
    //     message = "CPU WINS"

    // }else if(playerSumCard == 21){
    //     message = "Player Wins"
    // }else if(computerSumCard == 21){
    //     message = "CPU Wins"

    // }else if (playerSumCard > computerSumCard || computerSumCard > 21){
    //     message = "player Wins"
        
    // }else if (computerSumCard > computerSumCard || playerSumCard > 21){
    //     message = "CPU WINS"
        
    // }else if (playerSumCard === computerSumCard){
    //     message = "TIE Deal Again"
    // }
    let playerSumTotal = 0
    for(let i =0 ; i < playerCards.length;i++){
        playerSumTotal += playerCards[i]
      }
      console.log(playerSumTotal, "play =============================================")

      let computerSumTotal = 0
    for(let i =0 ; i < computerCards.length;i++){
        computerSumTotal += computerCards[i]
      }
      console.log(computerSumTotal, "comp =============================================")

    if (playerSumTotal <= 21 && computerSumTotal <= 21) {
        if (playerSumTotal< computerSumTotal){
            message = "Computer Wins"
            console.log("=>", playerSumTotal, computerSumTotal)
        }
        if(playerSumTotal> computerSumTotal){
            message = "Player Wins"
            console.log("=>", playerSumTotal, computerSumTotal)
        }if (playerSumTotal === computerSumTotal) {
            message = "Tie"
            console.log("=>", playerSumTotal, computerSumTotal)
        } 

    }  
        if (playerSumTotal > 21){
        message = "Computer Wins"
        console.log("=>", playerSumTotal, computerSumTotal)
    }
  }
 
 
