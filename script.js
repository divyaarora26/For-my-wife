let currentScreen = 0;
const screens = document.querySelectorAll(".screen");

const bgMusic = document.getElementById("bgMusic");
const heartBeat = document.getElementById("heartBeat");

const typedText = document.getElementById("typedText");
const cursor = document.getElementById("cursor");
const letterNext = document.getElementById("letterNext");

const LETTER = [
  "Dear Cherry 🍒",
  "",
  "I love you so much more than I could ever fully explain and being with you is one of the greatest gifts in my life.",
  "You mean everything to me.",
  "You are incredibly beautiful and absolutely gorgeous inside and out.",
  "Love your smile, your eyes and the whole you baby.",
  "",
  "Lucky to call you mine.",
  "I love you, always and forever ♾️",
  "",
  "Your Daddy"
];

let line = 0;
let char = 0;
let typingStarted = false;

/* NAVIGATION */
function nextScreen() {
  screens[currentScreen].classList.remove("active");
  currentScreen++;

  if (currentScreen < screens.length) {
    screens[currentScreen].classList.add("active");
  }

  if (currentScreen === 1) {
    bgMusic.play();
    heartBeat.play();
  }

  if (currentScreen === 3 && !typingStarted) {
    typingStarted = true;
    startTyping();
    startPetals();
  }
}

/* TYPE LETTER */
function startTyping() {
  typedText.innerHTML = "";
  const typing = setInterval(() => {
    if (line < LETTER.length) {
      if (char < LETTER[line].length) {
        typedText.innerHTML += LETTER[line][char++];
      } else {
        typedText.innerHTML += "<br><br>";
        line++;
        char = 0;
      }
    } else {
      clearInterval(typing);
      cursor.style.display = "none";
      letterNext.classList.remove("hidden");
    }
  }, 35);
}

/* PLEASE TEXT */
function showPlease() {
  document.getElementById("please").classList.remove("hidden");
}

/* PETALS */
function startPetals() {
  setInterval(() => {
    const petal = document.createElement("span");
    petal.textContent = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = 14 + Math.random() * 20 + "px";
    petal.style.animationDuration = 6 + Math.random() * 4 + "s";
    document.getElementById("petals").appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
  }, 700);
}

/* RESTART */
function restart() {
  location.reload();
}
