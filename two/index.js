const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = (document.querySelector(".result"));


    if(height === '' || height<= 0 || isNaN(height)){
        result.innerHTML = "Enter a Valid number"
    }
    if(weight === '' || weight<= 0 || isNaN(weight)){
        result.innerHTML = "Enter a valid nmber"
    }
});
