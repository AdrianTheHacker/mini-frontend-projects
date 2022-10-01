const number = 10


const number_box = document.getElementById("number-box")
const submit_box = document.getElementById("submit-box")
                           .addEventListener("click", () => {check_guess()})


function check_guess() {
    const guess = number_box.value;

    if(guess > number) {
        console.log("Guess Lower!")
    } 
    
    else if(guess < number) {
        console.log("Guess Higher!")
    }

    else {
        console.log("You Win!")
    }
}