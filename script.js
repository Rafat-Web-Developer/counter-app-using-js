/* ----------------------------- 
    get all element using id 
--------------------------------*/
const counterResult = document.getElementById("counterResult");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

/* ----------------------------- 
    initial counter value
--------------------------------*/
let count = 0;

/* ----------------------------- 
    handle events
--------------------------------*/
incrementBtn.addEventListener("click", () => {
  count++;
  counterResult.innerText = count;
  checkCounter();
});

decrementBtn.addEventListener("click", () => {
  count--;
  counterResult.innerText = count;
  checkCounter();
});

/* ----------------------------- 
    conditions
--------------------------------*/
const checkCounter = () => {
  if (count === 0) {
    decrementBtn.style.display = "none";
  } else {
    decrementBtn.style.display = "inline";
  }
};
checkCounter();
