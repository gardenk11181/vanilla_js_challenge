const numbers = document.querySelectorAll(".num");
var numShow = document.querySelector(".numShow");
const calcs = document.querySelectorAll(".calc");
// const plus = document.querySelector("plus")
// const minus = document.querySelector("minus")
// const times = document.querySelector("times")
// const divide = document.querySelector("divide")
// const equals = document.querySelector("plus")
// const initial = document.querySelector("plus")
var term1=0;
var operator="";

function saveStat(){
    const term2 = parseInt(numShow.innerText);
    if(term2 !==0) {
        if(operator==="+"){
            term1 = term1+term2;
        } else if(operator==="-") {
            term1 = term1-term2;
        } else if(operator==="*") {
            term1 = term1*term2;
        } else if(operator==="/") {
            term1 = term1/term2;
        } else if(operator==="=") {

        }
    }
    console.log("중간값:"+term1);
}

function addNumber(event) {
    if(operator==="=") {
        numShow.innerText=0;
        operator="";
    }
    const btn = event.target;
    numShow.innerText=parseInt(numShow.innerText+btn.innerText);
}


function addCalc() {
    if(term1===0) {
        term1 = parseInt(numShow.innerText);
        console.log(term1);
    } else{
        saveStat();
    }
    const btn = event.target;
    operator = btn.innerText;
    console.log(operator);
    if(operator==="=") {
        numShow.innerText=term1;
        term1=0;
    } else if(operator==="C"){
        term1=0;
        operator="";
        numShow.innerText=0;
    } else {
        numShow.innerText="";
    }
}

function init(){
    numbers.forEach(function(number) {
        number.addEventListener("click",addNumber);
    })
    calcs.forEach(function(calc){
        calc.addEventListener("click",addCalc)
    })
}

init();