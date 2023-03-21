let mouseTrBtnOptionOpen = document.querySelector(".mouse-tr__option-btn");
let mouseTrBtnOptionToClose = document.querySelector(
  ".mouse-tr__explanation-btn--ok"
);

let mouseTrExplanation = document.querySelector(".mouse-tr__explanation-box");
let mouseTrOptionMainMenu = document.querySelector(".mouse-tr__main-menu");
let mouseTrOptionTitle = document.querySelector(".mouse-tr__title");

mouseTrBtnOptionOpen.addEventListener("click", function mouseTropenOption() {
  mouseTrExplanation.style.display = "block";

  mouseTrOptionMainMenu.style.display = "none";
  mouseTrOptionTitle.style.display = "none";
});

mouseTrBtnOptionToClose.addEventListener(
  "click",
  function mouseTrtoCloseOption() {
    mouseTrExplanation.style.display = "none";

    mouseTrOptionMainMenu.style.display = "block";
    mouseTrOptionTitle.style.display = "block";
  }
);
