const count = document.getElementById("count")
const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");

let countState = 0

function incBy() {
    countState++
    count.innerText = countState
}

function decBy() {
    countState = countState - 1
    count.innerText = countState
}

oneBtn.addEventListener("click", incCount())
twoBtn.addEventListener("click", decCount())
