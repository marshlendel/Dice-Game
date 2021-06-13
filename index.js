let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


let image1 = `images/dice${randomNumber1}.png`;
let image2 = `images/dice${randomNumber2}.png`;



document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

//This was how I was originally going to match the images with the number lol. Talk about WET code
// if(randomNumber1 === 1) {
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// } else if(randomNumber1 === 2) {
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// } else if(randomNumber1 === 3) {
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// } else if(randomNumber1 === 4) {
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// } else if(randomNumber1 === 5) {
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// }else {
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");