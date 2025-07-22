let btnOne=document.getElementById("btnOne");
let btnTwo=document.getElementById("btnTwo");
let btnThree=document.getElementById("btnThree");

let inputOneName=document.getElementById("inputOneName");
let inputNamePTwo=document.getElementById("inputNamePTwo");
let inputTwoGuess=document.getElementById("inputTwoGuess");
let inputTwoNumber=document.getElementById("inputTwoNumber");
let screenOne =document.getElementById("screenOne");
let screenTwo =document.getElementById("screenTwo");
let screenThree =document.getElementById("screenThree");
let screenFour =document.getElementById("screenFour");

let nameError=document.getElementById("nameError");
let errorNameTwo=document.getElementById("errorNameTwo");
let numberErrorPOne=document.getElementById("numberErrorPOne");
let guessErrorPTwo=document.getElementById("guessErrorPTwo");

btnOne.addEventListener("click",()=>{
    console.log(inputOneName.value);

    if(!inputOneName.value== ""){
           screenTwo.classList.remove("hidden");
           screenOne.classList.add("hidden");
    }else{
         nameError.classList.remove("hidden");
    }
    
});

btnTwo.addEventListener("click",()=>{
    

    if(!inputTwoNumber.value==""){
          screenThree.classList.remove("hidden");
          screenTwo.classList.add("hidden");
    }
    else{
        numberErrorPOne.classList.remove("hidden");
    }
    
});

btnThree.addEventListener("click",()=>{
  console.log(inputNamePTwo.value);

  if(!inputNamePTwo.value==""){
   
   screenFour.classList.remove("hidden");
   screenThree.classList.add("hidden");
  }
  else{
     errorNameTwo.classList.remove("hidden");
  }
});