const numberData = document.querySelectorAll(".div");
const prevButton = document.querySelector(".btnprev");
const nextButton = document.querySelector(".btnnext");
const spanbtn = document.querySelectorAll("span");
let value = 1;

localStorage.setItem("i", value);

nextButton.addEventListener("click", () => {
  numberData[localStorage.getItem("i")].classList.add("active");
  spanbtn[localStorage.getItem("i", value) - 1].classList.add("spanactive");
  if (value < numberData.length - 1) {
    value++;
    localStorage.setItem("i", value);
    console.log(value, numberData.length);
  }
  if (value == numberData.length-1 ) {
    disbaleNext();
  }
});

function disbaleNext() {
  nextButton.disabled = true;
  nextButton.classList.add("actived");
}
function enableNext() {
  nextButton.disabled = false;
  nextButton.classList.remove("actived");
}
function enablePrev() {
  nextButton.disabled = false;
  nextButton.classList.remove("actived");
}

function disbaleprev() {
  prevButton.disabled = true;
  prevButton.classList.add("actived");
}

prevButton.addEventListener("click", (e) => {
  numberData[localStorage.getItem("i")].classList.remove("active");
  spanbtn[localStorage.getItem("i", value) - 1].classList.remove("spanactive");
  if (value > 1) {
    value--;
    localStorage.setItem("i", value);
  }
});
