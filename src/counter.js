const count = document.getElementById("count")
const oneBtn = document.getElementById("oneBtn");

let countState = 0

function incrementNumber() {
    countState++
    count.innerText = countState
}

oneBtn.addEventListener("click", incrementNumber())
