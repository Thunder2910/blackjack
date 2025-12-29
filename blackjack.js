cards = []
let isAlive = false
let hasBlackjack = false
let sum = 0
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

let player = {
    name:'Thunder',
    chips:143
}

playerEl.textContent = player.name + ': $' + player.chips

function getRandomCard() {
    randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum>10) {
        return 10
    } else if (randomNum===1) {
        return 11
    } else {
    return randomNum
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackjack = false
    isAlive = true
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = 'Want to play annother round?'
    } else if (sum===21) {
        message = 'You got blackjack'
        hasBlackjack = true
    } else {
        message = 'Ma chudale bkl'
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards: '
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }
}

function newCard() {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    if (isAlive && hasBlackjack===false) {
        renderGame()
    } else {
        messageEl.textContent = 'Start a new game motherfucker'
    }
}

