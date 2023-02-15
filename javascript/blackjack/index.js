//get a hand that sums up to exactly 21.
//dont't get 21 at least you want to get as clos eto 21 as ossible,but never above 21-out of the game
//3 scenario
//1.on starting ypu have 2 cards that is your starting hand amounts 15.
//2.have a king and ace,king=10,ace=11-got blackjack
//3.started out with 10 and 6,asked for new card and ended up at 22,so over 21

// let arr1=["hello","raniya","welcome","here"]
// let greetEl=document.getElementById("greeting-el");
// for(i=0;i<arr1.length;i++){
//     greetEl.textContent+=arr1[i] +" "
// }
// let rand=Math.floor(Math.random()*6)+1;
// console.log(rand);

// let firstCard=getRandomCard();
// let secondCard=getRandomCard();
let cards=[]
let sum= 0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let messageEl= document.getElementById("message-el");
let cardEl=document.querySelector("#card-el")
let sumEl=document.querySelector("#sum-el");
console.log(cards)

let player={
    name:"Raniya",
    chips:"145"
}
playerEl=document.getElementById("player-el");
playerEl.textContent=player.name + ": $" +player.chips;
//The values are now hardcoded,in order to avoid that create a function that generate he random number
function getRandomCard(){
    //get random number between 1-13
    let randomNumber = Math.floor(Math.random()*13)+1;
    //in blackjack j,Q,K worth 10,ace is 11
    //if 1->return 11
    //if 11-13->return 10
    if (randomNumber > 10){
        return 10;
    }else if(randomNumber===1){
        return 11;
    }
    else{
        return randomNumber;
    }
}
//startGame that renders renderGame
function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}
function renderGame(){
    sumEl.textContent="Sum: "+ sum;
    cardEl.textContent="Cards: " 
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+ " ";
    }
    if (sum<=20){
    message="do you want to draw new card?";
}
else if (sum===21){
    message="wohoo! you've got blackjack";
    hasBlackJack=true;

}
else{
    message="you are out";
    isAlive=false
}
messageEl.textContent=message

}
function newCard(){
   //we need to only allow player to get a new card if he is alive and not have blackjack
    if(isAlive===true && hasBlackJack===false){
   let card=getRandomCard();
   sum+=card;
   cards.push(card);
   console.log(cards);
   renderGame();
    }    
}
   