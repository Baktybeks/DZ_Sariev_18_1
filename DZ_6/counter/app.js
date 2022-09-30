let count = document.getElementById("count")

function AddCounter() {
  let countPlus = count.innerHTML;
  count.innerHTML++;
}

function LowerCounter() {
  let countMinus = count.innerHTML;
  if (countMinus>0){
    count.innerHTML--;
  }
}

let lowerCount = document.getElementById("lower-count-btn");
let addCount = document.getElementById("add-count-btn");

lowerCount.addEventListener("click", LowerCounter);
addCount.addEventListener("click", AddCounter);

