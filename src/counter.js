const count = document.getElementById("count")
const oneBtn = document.getElementById("oneBtn");

let countState = 0

function incBy() {
    countState++
    count.innerText = countState
}

oneBtn.addEventListener("click", incCount())
