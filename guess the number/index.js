const form = document.querySelector("form");
const guessed_numbers = [];
const guessednumbers = document.querySelector(".guessednumbers");
const random_number = Math.floor(Math.random() *(100-1+1));
const remaining_chances = document.querySelector(".r-chances");
const btn = document.querySelector("button");
const result = document.querySelector("#result");
const hint = document.querySelector(".hint")
let chances = 10;
remaining_chances.innerHTML = chances;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const number = parseInt(document.querySelector("#number").value);
    if (number === random_number) {
        btn.innerHTML = "Reload";
        btn.addEventListener("click", (e) => location.reload());
        result.innerHTML = "You Won";
    } else {
        if (number < random_number){
            hint.innerHTML = 'try high'
        }else{
            hint.innerHTML = 'try low'
        }
        --chances;
        if (chances === 0) {
            btn.innerHTML = "Reload";
            btn.addEventListener("click", (e) => location.reload());
            result.innerHTML = "Oops no chances left";
        }
        guessed_numbers.push(number);
        remaining_chances.innerHTML = chances;
        guessed_numbers.forEach((e) => {
            guessednumbers.innerHTML = `${guessed_numbers},`;
        });
        document.querySelector("#number").value = "";
    }
});
