/*for dice 1 */

var diceNumber1 = Math.floor(Math.random() * 6) + 1;

var diceImage = "dice" + diceNumber1 + ".png"

var diceImageSource = "images/" + diceImage;

var diceImage1 = document.querySelectorAll("img")[0];

diceImage1.setAttribute("src", diceImageSource);

/* for dice 2 */

var diceNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImageSource2 = "images/dice" + diceNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceImageSource2);

/* result */
if(diceNumber1 > diceNumber2) {
    document.querySelector("h1").innerHTML = "❤️Player 1 Wins";
}
else if (diceNumber2 > diceNumber1) {
    document.querySelector("h1").innerHTML = "💖Player 2 Wins";
} 
else {
    document.querySelector("h1").innerHTML = "🏳️Draw!";
}




