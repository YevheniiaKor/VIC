const Tryluck = document.getElementById("Tryluck");
const myLabel = document.getElementById("myLabel");
const Happy = document.getElementById("Happy");
const min = 1;
const max = 5;
let randomNum;

Tryluck.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
    Happy.textContent = `Gratulerer!`;
}