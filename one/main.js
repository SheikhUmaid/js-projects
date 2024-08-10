const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

// rgbw

btns.forEach((btn, index) => {
    console.log(btn.id);
    btn.style.backgroundColor = btn.id;
    btn.addEventListener("mouseover", (e) => {
        console.log(e);
        console.log(e.target);
        body.style.backgroundColor = e.target.id;

    });
});
