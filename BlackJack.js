let player={
    name:"Anteneh",
    chips:200
}
let firstcard=getRandomCard()
let secondcard=getRandomCard()
let cards=[firstcard,secondcard]
let sum=firstcard+secondcard
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let message=""
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+":$"+player.chips
function getRandomCard(){
    let randomNumer= Math.floor(Math.random()*13)+1
    if(randomNumer>10){
        return 10
    }
    else if(randomNumer===1){
        return 11
    }
    else{
        return randomNumer
    }
}

function startGame(){
    cardsEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++){
      cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum:"+sum
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="You have got Blackjack!"
    }
    else{
        message="You are out of the game!"
    }
    messageEl.textContent=message
}
function newcard(){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    startGame()
} 
