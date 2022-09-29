const seconds_box = document.getElementById("seconds")


function update_time() {
    let seconds = seconds_box.innerHTML
    if(seconds <= 0) {return}
    
    seconds_box.innerHTML = seconds - 1
}


setInterval(update_time, 1000)
