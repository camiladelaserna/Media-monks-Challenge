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
// Phrase assignation------------------------------------------------------

function phraseAssignation() {
  phrase.innerHTML = "";
  for (let i = 0; i < phrases.length; i++) {
    let pos = i;
    if ((pos + 1) == screen) {
      phrase.innerHTML = phrases[i]
      // phrase.style.opacity = 1;
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

  if (screen >= 1) {
    info.classList.remove ("home")
    buttonLeft.style.display = "block";
  } 

  backgroundAnimation()
  rightButtonVisibility()
  phraseAssignation()
  phraseJustification()

};

// -----------------------------------------------------------------------
// Button to left---------------------------------------------------------

function left() {
  screen--

   if (screen < 1) {
    info.classList.add ("home")
    buttonLeft.style.display = "none"; 
  } 

  backgroundAnimation()
  rightButtonVisibility()
  phraseAssignation()
  phraseJustification()
};

// -----------------------------------------------------------------------
// Show page--------------------------------------------------------------

 setTimeout(function(){ 
  loading.style.display = "none";
   hide.style.display = "block";
   appendWhatScreen()
 }, 3000);

 // -----------------------------------------------------------------------
// Appending screen guide-------------------------------------------------
function appendWhatScreen() {
  for (var i = 0; i < phrases.length; i++) {
    let outerBox = document.createElement("div");
    outerBox.id = "box";
    whatScreenDin.appendChild(outerBox);
    let innerBox = document.createElement("div");
    innerBox.id = "innerBox";
    innerBox.onclick = "goToScreen()";
    outerBox.appendChild(innerBox);
    let text = document.createElement("p");
    text.innerHTML = i + 1
    text.id = "textP"
    innerBox.appendChild(text);
    innerBox.onclick = function goToScreen() {
      if (text.innerHTML == i - 1) {
        screen = i + 1
      }
    }
    
  }
};

// -----------------------------------------------------------------------

