const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");
const formBx = document.querySelector(".formBx");
const body = document.querySelector("body");

function func1() {
    formBx.classList.add("active")
    body.classList.add("active")
}

function func2() {
    formBx.classList.remove("active")
    body.classList.remove("active")
}