var n = Math.random();
n = Math.floor(n * 6) + 1;
console.log(n);
document.querySelector("img.img1").setAttribute("src", "images/dice" + n + ".png");
var x = Math.random();
x = Math.floor(x * 6) + 1;
console.log(x);
document.querySelector("img.img2").setAttribute("src", "images/dice" + x + ".png");
if (n > x) {
  document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
} else if (n < x) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw !✌";
}
