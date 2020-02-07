const h2 = document.querySelector("h2");
const form = document.querySelector("form");
const slider = form.querySelector("input"); 
const MESSAGE = "Generate a number between 0 and "
const btnPlay = document.querySelector(".btnPlay");
const result = document.querySelector(".result");
const inputNumber = document.querySelector(".inputNumber");
const winner = document.querySelector(".winner");

function init(){
    slider.addEventListener('input',function(){
        h2.innerText = MESSAGE+slider.value;
    })
    btnPlay.addEventListener('click',function(){
        var random = Math.floor(Math.random()*slider.value+1);
        result.innerText = "Your chose: "+inputNumber.value+", the machine chose: "+random;
        if(inputNumber.value===random.toString()) {
            winner.innerText = "You won!";
        } else{
            winner.innerText = "You lost!";
        }
    })

}

init();
