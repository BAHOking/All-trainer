let mouseTrMainMenu = document.querySelector(".mouse-tr__main-menu");
let mouseTrBtnStart = document.querySelector(".mouse-tr__start-btn");

let mouseTrGameBox = document.querySelector(".mouse-tr__field-game--box");
let mouseTrTitle = document.querySelector(".mouse-tr__title");
let mouseTrGameField = document.querySelector(".mouse-tr__field-mouseTrGame");
let mouseTrGame = document.querySelector(".mouse-tr__game");
let mouseTrPointsBest = document.querySelector(".mouse-tr__point-best span");
let mouseTrPoints = document.querySelector(".mouse-tr__point span");
let mouseTrTaymerSpan = document.querySelector(".mouse-tr__taymer span");

let mouseTrGameEndBox = document.querySelector(".mouse-tr__game-end--box");
let mouseTrGameEndPoints = document.querySelector(
  ".mouse-tr__game-end--point span"
);
let mouseTrGameEndBestPoints = document.querySelector(
  ".mouse-tr__game-end--best-point span"
);

let mouseTrGameEndBtnRestart = document.querySelector(
  ".mouse-tr__game-end--btn-restart"
);

let mouseTrCells = document.querySelectorAll(".mouse-tr__cell");
let mouseTrArrInsects = ["fly", "mosquito", "caterpillar", "bee"];

let mouseTrBeetlesСaughtNum = 1;
let mouseTrBestResult = 0;
let mouseTrTaymerStop;

mouseTrBtnStart.addEventListener("click", function mouseTrToCloseMainMenu() {
  mouseTrTitle.style.display = "none";
  mouseTrMainMenu.style.display = "none";
  mouseTrGameBox.style.display = "block";

  mouseTrGameStart();
});

function mouseTrGameStart() {
  mouseTrCreateImg();
  mouseTrTaymerStop = setInterval(mouseTrTaymer, 1000);
}

function mouseTrCreateImg() {
  let img = document.createElement("img");

  img.alt = "bug";
  img.src = `/images/${mouseTrArrInsects[mouseTrRandomNumBeetle()]}.png`;

  mouseTrCells[mouseTrRandomNumCell()].appendChild(img);
}

function mouseTrRandomNumCell() {
  min = Math.ceil(0);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min)) + min;
}

function mouseTrRandomNumBeetle() {
  min = Math.ceil(0);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min)) + min;
}

mouseTrGame.addEventListener("click", function mouseTrCatchFly(event) {
  let img = event.target.closest("img");
  if (img.src == "https://bahoking.github.io/All-trainer/images/fly.png") {
    img.remove();
    mouseTrCreateImg();
    mouseTrBeetlesСaught();
  }
});

mouseTrGame.addEventListener("dblclick", function mouseTrCatchMosquito(event) {
  let img = event.target.closest("img");
  if (img.src == "https://bahoking.github.io/All-trainer/images/mosquito.png") {
    img.remove();
    mouseTrCreateImg();
    mouseTrBeetlesСaught();
  }
});

mouseTrGame.addEventListener("contextmenu", function mouseTrCatchBee(event) {
  let img = event.target.closest("img");
  if (img.src == "https://bahoking.github.io/All-trainer/images/bee.png") {
    img.remove();
    mouseTrCreateImg();
    mouseTrBeetlesСaught();
  }
});

mouseTrGame.addEventListener(
  "dragend",
  function mouseTrCatchCaterpillar(event) {
    let img = event.target.closest("img");
    if (img.src == "https://bahoking.github.io/All-trainer/images/caterpillar.png") {
      img.remove();
      mouseTrCreateImg();
      mouseTrBeetlesСaught();
    }
  }
);

function mouseTrBeetlesСaught() {
  mouseTrPoints.innerHTML = mouseTrBeetlesСaughtNum++;
}

function mouseTrTaymer() {
  if (mouseTrTaymerSpan.innerHTML > 0) {
    mouseTrTaymerSpan.innerHTML = +mouseTrTaymerSpan.innerHTML - 1;
  }

  if (mouseTrTaymerSpan.innerHTML <= 20) {
    mouseTrTaymerSpan.style.color = "orange";
  }
  if (mouseTrTaymerSpan.innerHTML <= 10) {
    mouseTrTaymerSpan.style.color = "red";
  }

  if (mouseTrTaymerSpan.innerHTML == 0) {
    clearInterval(mouseTrTaymerStop);
    mouseTrEndGame();
  }
}

function mouseTrEndGame() {
  if (
    mouseTrPoints.innerHTML < mouseTrBeetlesСaughtNum &&
    mouseTrBestResult < mouseTrBeetlesСaughtNum
  ) {
    mouseTrBestResult = mouseTrBeetlesСaughtNum - 1;
    mouseTrPointsBest.innerHTML = mouseTrBestResult;
  }

  mouseTrGameBox.style.display = "none";
  mouseTrGameEndBox.style.display = "block";

  mouseTrGameEndPoints.innerHTML = mouseTrBeetlesСaughtNum - 1;
  mouseTrGameEndBestPoints.innerHTML = mouseTrBestResult;
}

mouseTrGameEndBtnRestart.addEventListener(
  "click",
  function mouseTrGameRestart() {
    mouseTrGameBox.style.display = "block";
    mouseTrGameEndBox.style.display = "none";
    mouseTrTaymerSpan.style.color = "aqua";
    mouseTrBeetlesСaughtNum = 1;
    mouseTrPoints.innerHTML = 0;
    mouseTrTaymerSpan.innerHTML = 30;
    mouseTrTaymerStop = setInterval(mouseTrTaymer, 1000);
  }
);
