const input = document.querySelector("input");
const check = document.querySelector(".check");
const again = document.querySelector(".playagain");
const section = document.querySelector(".text");

// const counter = document,createElement("p");
// section.appendChild(counter);
// counter.textContent = 5;

const chance = document.querySelector(".chance");
const span = document.querySelector(".chance span");

const low = document.querySelector(".low");
const high = document.querySelector(".high");
const text = document.createElement("h3");
section.appendChild(text);

let number = Math.floor(Math.random() * 100) + 1;

check.addEventListener("click", () => {
    text.innerHTML = "";
    if(!input.value) {
        alert("Enter a number please!")
    } else {
        if (input.value == number) {
        text.innerHTML += `<h3>Congratulations...! <br>
        Do you have time ? Play again (; </h3>`;
        text.style.color = "black";
         check.className = "disabled";

    } else if (input.value > 100 || input.value == 0) {
        alert("Enter a valid number please");

    } else if (span.textContent <= 1) {
        text.innerHTML = `<h3>Bye bye happiness..!</h3>`;
        text.style.color = "white";
        chance.innerHTML = `Don't be angry ! <br>Play again..`
        check.className = "disabled";

    } else if (input.value > number) {
        text.innerHTML += `<h3>Decrease your guess.</h3>`;
        text.style.color = "white";
        span.textContent -= 1; 
        high.innerHTML = `${input.value}`;

    } else if (input.value < number) {
        text.innerHTML += `<h3>Increase your guess.</h3>`;
        text.style.color = "black";
        span.textContent -= 1;
        low.innerHTML = `${input.value}`;
        
    } 
    }; 
    
});

input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        check.click();
    }
});



again.addEventListener("click", () => {
    window.location.reload();
});

window.onload = () => {
    input.focus();

};

// const guessNumber = () => {
//     let number = Math.floor(Math.random() * 100) + 1;
//     let counter = 5;

//     if (input.value > 100) {
//         alert("Enter a valid number please!");
//     } else {
//         if (input.value === number) {
//             text.innerHTML = `<h3>Congratulations...!</h3>`;
//         } else if (input.value > number) {
//             text.innerHTML = `<h3>Decrease your guess.</h3>`;
//             counter --
//         } else if (input.value < number ) {
//             text.innerHTML = `<h3>Increase your guess.</h3>`;
//             counter--
//         }

//     }

// };

