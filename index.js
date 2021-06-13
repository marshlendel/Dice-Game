let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let image1 = `images/dice${randomNumber1}.png`;

document.querySelector(".img1").setAttribute("src", image1);

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
console.log(image1);