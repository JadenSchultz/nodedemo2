const count = document.getElementById("count")
const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");

let countState = 0

function incrementByOne() {
    countState++
    count.innerText = countState
}

function incrementByTwo() {
    countState = countState + 2
    count.innerText = countState
}

oneBtn.addEventListener("click", incrementByOne())
twoBtn.addEventListener("click", incrementByTwo())