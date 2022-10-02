const number = Math.floor(Math.random() * 10) + 1;


const number_box = document.getElementById("number-box")
const submit_box = document.getElementById("submit-box")
                           .addEventListener("click", () => {check_guess()})

const results_box = document.getElementById("results-box")


function check_guess() {
    const guess = number_box.value;
    let message = "You Win!"

    if(guess > number) {
        message = "Guess Lower"
    } 
    
    else if(guess < number) {
        message = "Guess Higher"
    }

    results_box.innerHTML = message
}
