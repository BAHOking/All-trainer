let mainMenu = document.querySelector(".main-menu");
let mainMenuBtns = document.querySelectorAll(".main-menu .btn");

let mouseTr = document.querySelector(".mouse-tr");
let keyboardTr1 = document.querySelector(".keyboard-tr-1");
let keyboardTr2 = document.querySelector(".keyboard-tr-2");

for (let elem of mainMenuBtns) {
  elem.addEventListener("click", function startTrainer() {
    mainMenu.style.display = "none";

    if (elem.classList.contains("main-menu__btn_1")) {
      mouseTr.style.display = "block";
      mouseTrTitle.style.display = "block";
      mouseTrMainMenu.style.display = "block";
    }

    if (elem.classList.contains("main-menu__btn_2")) {
      keyboardTr1.style.display = "block";
      Tr1Title.style.display = "block";

      for (let i = 0; i < Tr1tns.length; i++) {
        Tr1tns[i].style.display = "block";
      }
    }

    if (elem.classList.contains("main-menu__btn_3")) {
      keyboardTr2.style.display = "block";
      Tr2Title.style.display = "block";
      Tr2BtnMenu.style.display = "block";
    }
  });
}

let btnBackMainMenu = document.querySelector(".exit-main-menu__btn");

btnBackMainMenu.addEventListener("click", function BackMainMenu() {
  mainMenu.style.display = "block";

  mouseTrRes();
  keyboardTr1Res();
  keyboardTr2Res();
});

function mouseTrRes() {
  mouseTrGameBox.style.display = "none";
  mouseTrGameEndBox.style.display = "none";

  mouseTrTaymerSpan.style.color = "aqua";

  let mouseTrCellsImg = document.querySelector(".mouse-tr__cell img");
  if (mouseTrCellsImg) {
    mouseTrCellsImg.remove();
  }

  clearInterval(mouseTrTaymerStop);
  mouseTrBeetlesСaughtNum = 1;
  mouseTrPoints.innerHTML = 0;
  mouseTrTaymerSpan.innerHTML = 30;

  mouseTrExplanation.style.display = "none";
  mouseTrOptionMainMenu.style.display = "none";
  mouseTrOptionTitle.style.display = "none";
}

function keyboardTr1Res() {
  Tr1Title.style.display = "none";

  for (let i = 0; i < Tr1tns.length; i++) {
    Tr1tns[i].style.display = "none";
  }

  Tr1InputMenu.style.display = "none";
  Tr1EndMenu.style.display = "none";
  Tr1BtnRestart.style.display = "none";

  if (Tr1StartTrainer) {
    clearInterval(Tr1interval);
  }

  Tr1Time.innerHTML = 0;
  Tr1TimeSeconds = 0;
  Tr1StartTrainer = false;
}

function keyboardTr2Res() {
  Tr2Title.style.display = "none";
  Tr2BtnMenu.style.display = "none";
  Tr2Indicators.style.display = "none";
  Tr2PlayingField.style.display = "none";
  Tr2EndMenu.style.display = "none";

  if (Tr2StartTrainer) {
    clearInterval(Tr2Interval);
  }

  let Tr2div = document.querySelector(".keyboard-tr-2__playing-field div");
  if (Tr2div) {
    Tr2div.remove();
  }

  Tr2StartTrainer = false;
  Tr2MarginIt = 0;
  Tr2It = 1;
  Tr2LifeIt = 3;

  Tr2Text.innerHTML = 0;
  Tr2Complexity.innerHTML = 1;
  Tr2Life.innerHTML = 3;

  Tr2EndText.innerHTML = 0;
  Tr2EndComplexity.innerHTML = 1;
}
