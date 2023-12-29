let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  let letterText = document.createTextNode(letter);
  span.appendChild(letterText);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});

let words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einshtein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
let allKeys = Object.keys(words);
let randomNumberNumber = Math.floor(Math.random() * allKeys.length);
let randomNumberValue = allKeys[randomNumberNumber];
let randomWordsValue = words[randomNumberValue];
let randomWordsWords = Math.floor(Math.random() * randomWordsValue.length);
let randomValueValue = randomWordsValue[randomWordsWords];

document.querySelector(".game-info .category span").innerHTML =
  randomNumberValue;

let lettersGuessContainer = document.querySelector(".letters-guess");
let letterAndSpace = Array.from(randomValueValue);
letterAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "has-space";
  }
  lettersGuessContainer.appendChild(emptySpan);
});

let guessSpans = document.querySelectorAll(".letters-guess span");
let wrongAttempts = 0;
let theDraw = document.querySelector(".hangman-draw");
document.addEventListener("click", (e) => {
  // Set The Chose Status
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let theClickedSpan = e.target.innerHTML.toLowerCase();
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    theChosenWord.forEach((wordLetter, letterIndex) => {
      if (theClickedSpan === wordLetter) {
        // Set The Correct Chose
        theStatus = true;
        guessSpans.forEach((span, spanIndex) => {
          if (letterIndex === spanIndex) {
            span.innerHTML = wordLetter;
          }
        });
      }
    });

    if (theStatus !== true) {
      wrongAttempts++;
      theDraw.classList.add(`wrong-${wrongAttempts}`);
      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    }
  }
});
function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Game Over, The Word Is ${randomValueValue}`
  );
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
}
