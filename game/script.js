score = 0;
cross = true;
audiogo = new Audio('assests/gameover.mp3')

audio = new Audio('assests/music.mp3')
setTimeout(() => {
    audio.play();
}, 100);

document.onkeyup = function handleKeyUp(e) {
  console.log(e);

  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  obstacle = document.querySelector(".obstacle");
  gameOver = document.querySelector(".gameOver");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);

  if (offsetX < 93 && offsetY < 52) {
    gameOver.style.visibility = "visible";
    obstacle.classList.remove("animateObstacle");
    audiogo.play();
    setTimeout(() => {
        audiogo.pause();
        audio.pause();
    }, 1000);
  }
  else if(offsetX < 145 && cross){
     score += 1;
     updateScore(score);
     cross = false;
     setTimeout(() => {
        cross = true;
     }, 1000);
  }
}, 10);

function updateScore(score) {
  scoreContainer.innerHTML = "Your score : " + score;
}