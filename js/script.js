let playerCards=[];
let computerCards=[];
let message;
let playerSumCard;
let computerSumCard;

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
function calculateHandValue(arr) {
    console.log(arr, "arr chack")
    let total = 0
    playerSumCard = total
}
function deal() {
    playerCards = [getRandomCard(), getRandomCard()]
    computerCards = [getRandomCard(), getRandomCard()]
    render ()
}
function hit(arr) {
   let hitcard = getRandomCard()
    playerCards.push(hitcard)
   render()
}
function dealerHit(arr) {
    let hitcard = getRandomCard()
     arr.push(hitcard)
    render()
 }
function stand() {
    decideWinner()
    render()
}
function restart() {
    init()
}

function decideWinner() {
    let computerSum = 0
    for(let i =0 ; i < computerCards.length;i++){
        computerSum += computerCards[i]
    }

    while(computerSum < 16){
    dealerHit(computerCards)
    let newVal = computerSum1
    computerSum = newVal
    console.log('newval computer summmmmmm',newVal)
    for(let i =0 ; i <= computerCards.length;i++){
         computerSum1 += computerCards[i]
      }
    }

    let playerSumTotal = 0
    for(let i =0 ; i < playerCards.length;i++){
        playerSumTotal += playerCards[i]
    }

      let computerSumTotal = 0
    for(let i =0 ; i < computerCards.length;i++){
        computerSumTotal += computerCards[i]
    }

    if(playerSumTotal > 21){
        message = 'You went over, Computer Wins'
    }else if( playerSumTotal <= 21 && playerSumTotal <computerSumTotal && computerSumTotal <= 21){
        message ='You Loose'
    }else if(playerSumTotal <= 21 && playerSumTotal > computerSumTotal){
        message ='You Win'
    }else if(playerSumTotal === computerSumTotal) {
        message = 'Tie'
    }
  }