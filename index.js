let player = {
    name : "pavan",
    coins : 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('mssg-el');
// let sumEl = document.getElementById('sum-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.getElementById('cards-el');
let warningEl = document.getElementById('warning-el');
let playerEl = document.getElementById('player-el');

function startGame(){
    if(isAlive)
    {
        warningEl.textContent = 'You are in the middle of the game...';
        return;
    }
    cards = [];
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard);
    cards.push(secondCard);
    playerEl.textContent = player.name + " $" + player.coins;
    renderGame();
}
function getRandomCard(){
    let randomNum =  Math.floor(Math.random() * 13) + 1;
    if(randomNum > 10)
        return 10;
    else if(randomNum === 1)
        return 11;
    return randomNum;
}
function renderGame(){
    sumEl.innerText = 'Sum : ' +  sum;
    cardsEl.textContent = "Cards : ";
    for(let i = 0 ; i< cards.length ; i++)
        cardsEl.textContent += cards[i] + " ";
    if(sum < 21)
    message = 'Do you want to pick another card ? 😊 ';
    else if(sum === 21){
        message = " you have won the BlackJack !!! Hurray !! 🤑🥳🥳🤑 ";
        hasBlackJack = true;
    }
    else{
        message = "You are out of the game 😭😢😓";
        isAlive = false;
    }
    messageEl.innerText = message;
    warningEl.textContent = "";
}

function newCard(){
    if(isAlive && hasBlackJack === false)
    {
        warningEl.textContent = "";
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    else
        warningEl.textContent = "Cannot Draw further cards you are out of the game... or you haven't started the game";
}