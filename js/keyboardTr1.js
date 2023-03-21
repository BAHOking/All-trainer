let Tr1Title = document.querySelector(".keyboard-tr-1__title");
let Tr1tns = document.querySelectorAll(".keyboard-tr-1__btn");
let Tr1InputMenu = document.querySelector(".keyboard-tr-1__menu-trainer");
let Tr1Input = document.querySelector(".keyboard-tr-1__input");
let Tr1Text = document.querySelector(".keyboard-tr-1__text span");
let Tr1Time = document.querySelector(".keyboard-tr-1__time span");
let Tr1EndMenu = document.querySelector(".keyboard-tr-1__menu-end");
let Tr1EndTime = document.querySelector(".keyboard-tr-1__menu-end--time span");
let Tr1BtnRestart = document.querySelector(".keyboard-tr-1__menu-end--restart");

let Tr1TimeSeconds = 0;
let Tr1StartTrainer = false;

let Tr1ArrStroke = [
  "0 1 2 3 4 5 6 7 8 9 60 15 27 38 42 59 61 73 84 951 ! @ # $ % ^ & * ( ) _ - / * = ~ ` | { } : ; ? < > [ ] ' / . , № ₴",
  "А а Б б В в Г г Ґ ґ Д д Е е Є є Ж ж З з И и І і Ї ї Й й К к Л л М м Н н О о П п Р р С с Т т У у Ф ф Х х Ц ц Ч ч Ш ш Щ щ ь Ю ю Я я",
  "Яблуко, Апельсин, Банан, Груша, Ананас, Манго, Ківі, Лимон, Грейпфрут, Кавун, Абрикос, Вишня, Слива, Черешня, Мандарин, Персик, Гранат, Ягода, Клубника, Малина",
  "Сонце сходить на сході і заходить на заході. Холодно і снігопад, коли зима на дворі. Серце радіє, коли бачить улюблену людину. Не можна покидати дітей без нагляду. Літо - час для відпочинку і розваг. Найбільшою пам'яттю залишаються моменти з друзями. Птахи співають уранці, коли сонце зійшло. Мова - це один з найважливіших способів спілкування. Любов - найсильніша емоція, яку може відчувати людина. Світ змінюється з кожним днем, і нам потрібно вміти адаптуватися до змін.",
  "A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z",
  "Apple, Banana, Orange, Pineapple, Mango, Papaya, Kiwi, Strawberry, Blueberry, Raspberry, Blackberry, Peach, Pear, Plum, Cherry, Grapefruit, Lemon, Lime, Watermelon, Cantaloupe",
  "My favorite color is blue, and I love to wear it all the time. Yesterday, I watched a really good movie with my friends and we had a great time. My mom is an amazing cook, and she made a delicious lasagna for dinner last night. I love to travel and explore new places, especially countries with rich histories and cultures. This weekend, I'm planning to go hiking in the mountains with some friends. I enjoy reading books about science and technology, and staying up-to-date on the latest advancements in the field.",
  "Сьогодні я пішов на прогулянку до парку та насолодився свіжим повітрям. Today, I went for a walk in the park and enjoyed the fresh air. Моє улюблене заняття - читання книг про пригоди та фантастику. My favorite hobby is reading books about adventures and science fiction. Я люблю співати та грати на гітарі, це допомагає мені розслабитися та насолоджуватися музикою. I love to sing and play guitar, it helps me relax and enjoy the music. Завдяки своїй роботі я маю можливість допомагати людям та змінювати світ на краще. Thanks to my job, I have the opportunity to help people and make the world a better place.",
];

for (let i = 0; i < Tr1tns.length; i++) {
  Tr1tns[i].addEventListener("click", function Tr1Start() {
    Tr1StartTrainer = true;

    Tr1Input.value = Tr1ArrStroke[i];
    Tr1Text.innerHTML = Tr1ArrStroke[i].length;

    Tr1Title.style.display = "none";
    Tr1InputMenu.style.display = "block";

    for (let i = 0; i < Tr1tns.length; i++) {
      Tr1tns[i].style.display = "none";
    }

    Tr1interval = setInterval(Tr1Taymer, 1000);
    function Tr1Taymer() {
      Tr1Time.innerHTML = `${++Tr1TimeSeconds}`;
    }
  });
}

document.addEventListener("keypress", Tr1DeleteSymbol);
function Tr1DeleteSymbol(event) {
  if (Tr1StartTrainer) {
    let code = event.keyCode;
    let symbol = String.fromCharCode(code);

    if (symbol == Tr1Input.value[0]) {
      Tr1Input.value = Tr1Input.value.substr(1);
      Tr1Text.innerHTML = Tr1Input.value.length;
    }

    if (Tr1Input.value.length === 0) {
      Tr1Tr1End();
    }
  }
}

function Tr1Tr1End() {
  Tr1StartTrainer = false;

  Tr1InputMenu.style.display = "none";
  Tr1EndMenu.style.display = "block";
  Tr1BtnRestart.style.display = "block";

  clearInterval(Tr1interval);
  Tr1EndTime.innerHTML =
    Math.floor(Tr1TimeSeconds / 60) + "хв. " + (Tr1TimeSeconds % 60) + "c.";
}

Tr1BtnRestart.addEventListener("click", function Tr1restart() {
  Tr1Title.style.display = "block";
  Tr1EndMenu.style.display = "none";
  Tr1BtnRestart.style.display = "none";

  for (let i = 0; i < Tr1tns.length; i++) {
    Tr1tns[i].style.display = "block";
  }

  Tr1Time.innerHTML = 0;
  Tr1TimeSeconds = 0;
});
