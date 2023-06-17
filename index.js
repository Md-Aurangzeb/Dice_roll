function play(){
var player1=Math.floor(Math.random()*6)+1;
var player2=Math.floor(Math.random()*6)+1;
var image1="./images/dice"+player1+".png";
var image2="./images/dice"+player2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(player1>player2)
    document.querySelector("h1").innerHTML="🚩Player1 Won!";
else if(player2>player1)
    document.querySelector("h1").innerHTML="Player2 Won!🚩"
else
    document.querySelector("h1").innerHTML="Draw!"
}
document.addEventListener("click",play);