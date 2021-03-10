var score_0 = document.querySelector("#score--0");
var score_1 = document.querySelector("#score--1");
var dice_img = document.querySelector(".dice");
var roll = document.querySelector(".btn--roll");
var hold = document.querySelector(".btn--hold");
var dice;
var score = [0,0];
var current_score = 0;
var activeplayer = 0;
dice_img.classList.add("hidden");
score_0.textContent = 0;
score_1.textContent = 0;

function switch_player() {
  current_score = 0;
  document.querySelector(`#current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0?1:0;
  document.querySelector(".player--0 ").classList.toggle('player--active');
  document.querySelector(".player--1").classList.toggle('player--active');
}

roll.addEventListener("click",function () {
  dice = Math.floor(Math.random()*6)+1;
  dice_img.classList.remove("hidden");
  dice_img.src = `dice-${dice}.png`;
  if (dice!==1) {
    current_score = current_score + dice;
    document.querySelector(`#current--${activeplayer}`).textContent = current_score;
  }
  else{
   switch_player();
  }
});
hold.addEventListener("click",function () {
score[activeplayer] = score[activeplayer]+current_score;
document.querySelector(`#score--${activeplayer}`).textContent = score[activeplayer];
document.querySelector(`#current--${activeplayer}`).textContent = 0;
dice_img.classList.add("hidden");
if (score[activeplayer]>=100) {
  document.body.style.backgroundColor = black;
}
else{
  switch_player();
}
});

document.querySelector(".btn--new").addEventListener("click",function () {
  location.reload();
});




// function random_color() {
//   var r,g,b;

// r = Math.floor(Math.random()*256);
// g = Math.floor(Math.random()*256);
// b = Math.floor(Math.random()*256);

// var rgb_color = "rgb("+r+","+g+","+b+")";
// console.log(rgb_color);
// document.body.style.backgroundColor = rgb_color;
// }
// random_color();