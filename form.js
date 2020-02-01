// import { log } from "util";

let loginInput =document.querySelector('.email');
console.log(loginInput);

loginInput.addEventListener('change', handlerLoginInputChange);

function handlerLoginInputChange(event) {
    console.log('login input had been changed', event.target.value);
}
loginInput.addEventListener('keydown', handlerLoginInputKeyDown);

function handlerLoginInputKeyDown(event) {
    console.log("Changed login function", event.target.value);
}