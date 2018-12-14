// Getting DOM elements---------------------------------------------------

const background = document.getElementById("background")
const info = document.getElementsByClassName("info")[0]
const buttonLeft = document.getElementById("buttonLeft")
const buttonRight = document.getElementById("buttonRight")
const whatScreen = document.getElementsByClassName("whatScreen")[0]
const whatScreenDin = document.getElementById("dynamic")
let phrase = document.getElementById("phrase")
let phraseBox = document.getElementById("phraseBox")
let final = document.getElementById("final")
const hide = document.getElementById("hide")
const loading = document.getElementById("loading")

// -----------------------------------------------------------------------
// Setting screen and offset----------------------------------------------

var screen = 0;
const totalOffset = 495;
const totalScreens = 9;
const screenOffset = 495 / totalScreens;

// -----------------------------------------------------------------------
// Setting phrases--------------------------------------------------------

const phrases = [
  "TALENT IS GIVEN<br/>TRUE SKILL IS<br/>EARNED",
  "BE FLEXIBLE TO<br/>CHANGE AND<br/>STURDY IN<br/>CONVICTION",
  "USE MANY SKILLS<br/>YET WORK AS ONE",
  "TO MASTER<br/>ANYTHING FIND<br/>INTEREST IN<br/>EVERYTHING",
  "INDIVIDUALS<br/>FLOURISH<br/>IF CULTURE<br/>AND WISDOM<br/>ARE SHARED",
  "TRAIN FOR<br/>PERFECTION BUT<br/>AIM FOR MORE",
  "TAKE PRIDE IN YOUR<br/>WORK BUT DO NOT<br/>SEEK PRAISE",
  "TEMPORARY<br/>SACRIFICE BRINGS<br/>LASTING RESULTS",
];

// -----------------------------------------------------------------------
// Show page--------------------------------------------------------------

setTimeout(function(){ 
  loading.style.display = "none";
   hide.style.display = "block";
   appendWhatScreen()
 }, 3000);

 // -----------------------------------------------------------------------
 // Animate dynamic phrases------------------------------------------------

 function changeOpacity() {
  phrase.classList.remove('in');
  phrase.classList.add('out');
  setTimeout(() => {
    phrase.classList.remove('out');
    phrase.classList.add('in');
  }, 1);
}
// Phrase assignation------------------------------------------------------

function phraseAssignation() {

  changeOpacity()

  phrase.innerHTML = "";
  for (let i = 0; i < phrases.length; i++) {
    let pos = i;
    if ((pos + 1) == screen) {
      phrase.innerHTML = phrases[i]
    }
  }
};

// -----------------------------------------------------------------------
// Phrase justification----------------------------------------------------

function phraseJustification() {
  if ((screen == 3) || (screen == 4) || (screen == 5)) {
    phraseBox.style.justifyContent = "flex-end";
  } else {
    phraseBox.style.justifyContent= "flex-start";    
  }
};

// -----------------------------------------------------------------------
// Left button visibility-------------------------------------------------

function rightButtonVisibility() {
  if (screen != totalScreens) {
    buttonRight.style.display = "block";
    final.style.display = "none";
  } else {
    buttonRight.style.display = "none";
    final.style.display = "flex";
  }
};

// -----------------------------------------------------------------------
// Background animation---------------------------------------------------

function backgroundAnimation() {
  background.style.left = "-" + screenOffset*screen + "%";
};

// -----------------------------------------------------------------------
// Button to right--------------------------------------------------------

function right() {
  screen++
  moveSlide()

};

// -----------------------------------------------------------------------
// Move to screen---------------------------------------------------------

function moveSlide() {
  if (screen >= 1) {
    info.classList.remove ("home")
    buttonLeft.style.display = "block";
  } else {
    info.classList.add ("home")
    buttonLeft.style.display = "none";
  }

  backgroundAnimation()
  rightButtonVisibility()
  phraseAssignation()
  phraseJustification()
}

// -----------------------------------------------------------------------
// To first sceen---------------------------------------------------------

function toFirst() {
  console.log(123);
   screen = 0;
   moveSlide()
};

// -----------------------------------------------------------------------
// To last screen---------------------------------------------------------

function toLast() {
  console.log(123);
  screen = phrases.length + 1;
  moveSlide()
};

// -----------------------------------------------------------------------
// Button to left---------------------------------------------------------

function left() {
  screen--

  moveSlide()
};

// -----------------------------------------------------------------------
// Appending screen guide-------------------------------------------------
function appendWhatScreen() {
  for (let i = 0; i < phrases.length; i++) {
    let outerBox = document.createElement("div");
    outerBox.id = "box";
    whatScreenDin.appendChild(outerBox);
    let innerBox = document.createElement("div");
    innerBox.className = "innerBox";
    outerBox.appendChild(innerBox);
    let text = document.createElement("p");
    text.innerHTML = i + 1
    text.id = "textP"
    innerBox.appendChild(text);
    outerBox.onclick = function goToScreen() {
        screen = i + 1
        moveSlide()
    }
  }
};

// -----------------------------------------------------------------------

