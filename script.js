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
    all common functions
--------------------------------*/
const checkCounter = () => {
  if (count === 0) {
    decrementBtn.style.display = "none";
  } else {
    decrementBtn.style.display = "inline";
  }
};

const calculation = (type) => {
  if (type === "increment") {
    count++;
  } else if (type === "decrement") {
    count--;
  } else {
    count = 0;
  }
  counterResult.innerText = count;
};

/* ----------------------------- 
    call function first time 
--------------------------------*/
checkCounter();

/* ----------------------------- 
    handle events
--------------------------------*/
incrementBtn.addEventListener("click", () => {
  calculation("increment");
  checkCounter();
});

decrementBtn.addEventListener("click", () => {
  calculation("decrement");
  checkCounter();
});
