let Tr2Title = document.querySelector(".keyboard-tr-2__title");
let Tr2BtnMenu = document.querySelector(".keyboard-tr-2__btn-menu");
let Tr2Btns = document.querySelectorAll(".keyboard-tr-2__btn");
let Tr2Indicators = document.querySelector(".keyboard-tr-2__indicators");
let Tr2Text = document.querySelector(".keyboard-tr-2__text span");
let Tr2Complexity = document.querySelector(".keyboard-tr-2__complexity span");
let Tr2Life = document.querySelector(".keyboard-tr-2__life span");

let Tr2PlayingField = document.querySelector(".keyboard-tr-2__playing-field");
let Tr2PlayingItem;

let Tr2EndMenu = document.querySelector(".keyboard-tr-2__end-menu");
let Tr2EndText = document.querySelector(".keyboard-tr-2__end-text span");
let Tr2EndComplexity = document.querySelector(
  ".keyboard-tr-2__end-complexity span"
);
let Tr2EndBtn = document.querySelector(".keyboard-tr-2__end-btn");

let Tr2SelectedArray;
let Tr2StartTrainer = false;
let Tr2MarginIt = 0;
let Tr2It = 1;
let Tr2LifeIt = 3;
let Tr2Interval;

let Tr2ArrButtons = {
  0: [
    "а",
    "б",
    "в",
    "г",
    "ґ",
    "д",
    "е",
    "є",
    "ж",
    "з",
    "и",
    "і",
    "ї",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ь",
    "ю",
    "я",
    "А",
    "Б",
    "В",
    "Г",
    "Ґ",
    "Д",
    "Е",
    "Є",
    "Ж",
    "З",
    "И",
    "I",
    "Ї",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ь",
    "Ю",
    "Я",
  ],
  1: [
    "A",
    "a",
    "B",
    "b",
    "C",
    "c",
    "D",
    "d",
    "E",
    "e",
    "F",
    "f",
    "G",
    "g",
    "H",
    "h",
    "I",
    "J",
    "j",
    "K",
    "k",
    "L",
    "l",
    "M",
    "m",
    "N",
    "n",
    "O",
    "o",
    "P",
    "p",
    "q",
    "R",
    "r",
    "S",
    "s",
    "T",
    "t",
    "U",
    "u",
    "V",
    "v",
    "W",
    "w",
    "X",
    "x",
    "Y",
    "y",
    "Z",
    "z",
  ],
  2: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "/",
    "*",
    "=",
    "~",
    "`",
    "|",
    "{",
    "}",
    ":",
    ";",
    "?",
    "<",
    ">",
    "[",
    "]",
    "'",
    "/",
    ".",
    ",",
    "₴",
  ],
  3: [
    "b",
    "D",
    "d",
    "F",
    "f",
    "G",
    "g",
    "h",
    "J",
    "j",
    "k",
    "L",
    "l",
    "N",
    "n",
    "q",
    "R",
    "r",
    "S",
    "s",
    "t",
    "U",
    "u",
    "V",
    "v",
    "W",
    "w",
    "Y",
    "Z",
    "z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "/",
    "*",
    "=",
    "~",
    "`",
    "|",
    "{",
    "}",
    ":",
    ";",
    "?",
    "<",
    ">",
    "[",
    "]",
    "'",
    "/",
    ".",
    ",",
    "₴",
    "б",
    "в",
    "г",
    "ґ",
    "д",
    "є",
    "ж",
    "з",
    "и",
    "ї",
    "й",
    "к",
    "л",
    "н",
    "п",
    "т",
    "ф",
    "ц",
    "ч",
    "ш",
    "щ",
    "ь",
    "ю",
    "я",
    "Б",
    "Г",
    "Ґ",
    "Д",
    "Є",
    "Ж",
    "З",
    "И",
    "Ї",
    "Й",
    "Л",
    "П",
    "Ф",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ь",
    "Ю",
    "Я",
  ],
};

let Tr2ArrNumRandom = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
];

for (let i = 0; i < Tr2Btns.length; i++) {
  Tr2Btns[i].addEventListener("click", function Tr2StartGame() {
    Tr2StartTrainer = true;
    Tr2Title.style.display = "none";

    Tr2BtnMenu.style.display = "none";
    Tr2Indicators.style.display = "block";
    Tr2PlayingField.style.display = "block";
    Tr2SelectedArray = Tr2ArrButtons[i];

    Tr2CreateDiv(Tr2SelectedArray);

    Tr2Interval = setInterval(Tr2MarginComplexity, 60);
  });
}

function Tr2CreateDiv(Tr2SelectedArray) {
  let divInner = document.createElement("div");
  divInner.classList.add("playing__item");
  divInner.style.marginLeft = `${Tr2RandomNum()}%`;
  divInner.textContent = Tr2RandomSymbol(Tr2SelectedArray);
  Tr2PlayingField.appendChild(divInner);
  Tr2PlayingItem = document.querySelector(".playing__item");
}

function Tr2RandomSymbol(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function Tr2RandomNum() {
  let rand = Math.floor(Math.random() * Tr2ArrNumRandom.length);
  return Tr2ArrNumRandom[rand];
}

document.addEventListener("keypress", Tr2ChangeSymbol);
function Tr2ChangeSymbol(event) {
  if (Tr2StartTrainer) {
    let code = event.keyCode;
    let symbol = String.fromCharCode(code);

    if (symbol == Tr2PlayingItem.textContent) {
      Tr2MarginIt = 0;
      Tr2Text.innerHTML = Tr2It++;

      Tr2PlayingItem.remove();
      Tr2CreateDiv(Tr2SelectedArray);
    }
  }
}

function Tr2MarginComplexity() {
  if (Tr2It > 10) {
    Tr2Complexity.innerHTML = 2;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 55);
  }

  if (Tr2It > 20) {
    Tr2Complexity.innerHTML = 3;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 50);
  }

  if (Tr2It > 30) {
    Tr2Complexity.innerHTML = 4;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 45);
  }

  if (Tr2It > 40) {
    Tr2Complexity.innerHTML = 5;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 40);
  }

  if (Tr2It > 50) {
    Tr2Complexity.innerHTML = 6;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 35);
  }

  if (Tr2It > 60) {
    Tr2Complexity.innerHTML = 7;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 30);
  }

  if (Tr2It > 70) {
    Tr2Complexity.innerHTML = 8;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 25);
  }

  if (Tr2It > 80) {
    Tr2Complexity.innerHTML = 9;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 20);
  }

  if (Tr2It > 90) {
    Tr2Complexity.innerHTML = 10;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 15);
  }

  if (Tr2It > 100) {
    Tr2Complexity.innerHTML = 11;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 10);
  }

  if (Tr2It > 110) {
    Tr2Complexity.innerHTML = 12;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 5);
  }

  if (Tr2It > 120) {
    Tr2Complexity.innerHTML = 13;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 4);
  }

  if (Tr2It > 130) {
    Tr2Complexity.innerHTML = 14;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 3);
  }

  if (Tr2It > 140) {
    Tr2Complexity.innerHTML = 15;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 2);
  }

  if (Tr2It > 150) {
    Tr2Complexity.innerHTML = 16;
    clearInterval(Tr2Interval);
    Tr2Interval = setInterval(Tr2MarginComplexity, 1);
  }

  Tr2PlayingItem.style.marginTop = `${Tr2MarginIt++}px`;
  Tr2LifeError();
}

function Tr2LifeError() {
  if (Tr2MarginIt === 440) {
    Tr2Life.innerHTML = --Tr2LifeIt;

    Tr2PlayingItem.remove();
    Tr2MarginIt = 0;
    Tr2CreateDiv(Tr2SelectedArray);
  }

  if (Tr2LifeIt === 0) {
    Tr2EndGame();
  }
}

function Tr2EndGame() {
  Tr2EndMenu.style.display = "block";
  Tr2Indicators.style.display = "none";
  Tr2PlayingField.style.display = "none";

  Tr2EndText.innerHTML = Tr2Text.innerHTML;
  Tr2EndComplexity.innerHTML = Tr2Complexity.innerHTML;

  clearInterval(Tr2Interval);
  Tr2PlayingItem.remove();
}

Tr2EndBtn.addEventListener("click", function Tr2ResetGame() {
  Tr2StartTrainer = false;
  Tr2MarginIt = 0;
  Tr2It = 1;
  Tr2LifeIt = 3;

  Tr2EndMenu.style.display = "none";
  Tr2Indicators.style.display = "none";
  Tr2Title.style.display = "block";
  Tr2BtnMenu.style.display = "block";

  Tr2Text.innerHTML = 0;
  Tr2Complexity.innerHTML = 1;
  Tr2Life.innerHTML = 3;

  Tr2EndText.innerHTML = 0;
  Tr2EndComplexity.innerHTML = 1;
});
