const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

// rgbw

btns.forEach((btn, index) => {
    console.log(btn);
    btn.addEventListener("mouseover", (e) => {
        console.log(e);
        console.log(e.target);
        // switch(e.target.id){
        //     case 'red':
        body.style.backgroundColor = e.target.id;
        // }
    });
});
