
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");


var settings={
    "async":true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(respose){
    console.log(respose);
    btc.innerHTML =respose.bitcoin.usd
    eth.innerHTML =respose.ethereum.usd
    doge.innerHTML =respose.dogecoin.usd
})