const form = document.querySelector("form");
const guessed_numbers = []
const guessednumbers = document.querySelector(".guessednumbers")
const random_number = 15
const remaining_chances = document.querySelector(".r-chances")
let chances = 10
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const number = parseInt(document.querySelector('#number'));
    if(number === random_number){

    }else{
        --chances;
        if(chances === 0){
            
        }
        guessed_numbers.push(number.value)
        remaining_chances.innerHTML = chances
        guessed_numbers.forEach((e)=>{
            guessednumbers.innerHTML += e
        })
        number.value = ''
    }
})
