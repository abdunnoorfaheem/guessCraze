let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");

let inputOneName = document.getElementById("inputOneName");
let inputNamePTwo = document.getElementById("inputNamePTwo");
let inputTwoGuess = document.getElementById("inputTwoGuess");
let inputTwoNumber = document.getElementById("inputTwoNumber");
let screenOne = document.getElementById("screenOne");
let screenTwo = document.getElementById("screenTwo");
let screenThree = document.getElementById("screenThree");
let screenFour = document.getElementById("screenFour");
let screenFinal = document.getElementById("screenFinal");

let nameError = document.getElementById("nameError");
let errorNameTwo = document.getElementById("errorNameTwo");
let numberErrorPOne = document.getElementById("numberErrorPOne");
let guessErrorPTwo = document.getElementById("guessErrorPTwo");
let resultShow = document.getElementById("resultShow");

btnOne.addEventListener("click", () => {
  if (!inputOneName.value == "") {
    screenTwo.classList.remove("hidden");
    screenOne.classList.add("hidden");
  } else {
    nameError.classList.remove("hidden");
  }
});

btnTwo.addEventListener("click", () => {
  if (!inputTwoNumber.value == "") {
    screenThree.classList.remove("hidden");
    screenTwo.classList.add("hidden");
  } else {
    numberErrorPOne.classList.remove("hidden");
  }
});

btnThree.addEventListener("click", () => {
  if (!inputNamePTwo.value == "") {
    screenFour.classList.remove("hidden");
    screenThree.classList.add("hidden");
  } else {
    errorNameTwo.classList.remove("hidden");
  }
});

btnFour.addEventListener("click", () => {
  if (inputTwoNumber.value == inputTwoGuess.value) {
    screenFour.classList.add("hidden");
    screenFinal.classList.remove("hidden");
    resultShow.classList.remove("hidden");
    resultShow.innerText = `${inputNamePTwo.value} Win`;
  } else {
    screenFour.classList.add("hidden");
    screenFinal.classList.remove("hidden");
    resultShow.classList.remove("hidden");
    resultShow.innerText = "Player 1 Win";
    resultShow.innerText = `${inputOneName.value} Win`;
    
  }
});
