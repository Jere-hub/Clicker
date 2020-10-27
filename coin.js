let coins = 0;
let coinsPS = 0;
let coinsPC = 1;
let coincost = 50;



function gainCoin() {

coins += coinsPC;
}

setInterval(function renderCoins() {

document.getElementById("coins").innerHTML = "Coins: " + coins;
})


setInterval(function renderCoinsPS() {

document.getElementById("coinsPS").innerHTML = "Coins per second: " + 
coinsPS;
})

setInterval(function renderCoinsprice() {
    document.getElementById("coinsprice").innerHTML = "Coin price: " + 
    coincost;
    })

function getCoinsPS(){

if (coins >= coincost){
coinsPS += 1;
coins -= coincost;
coincost += 10;

}
else{
alert("Anteeksi, sinulla ei ole tarpeeksi kolikoita.")
}
setInterval(function coinPS(){

coins += coinsPS;

}, 1000)

}