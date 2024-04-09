const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const username = document.querySelector("#text");
let count = 0;
let count1 = 0;
const submitButton = document.querySelector(".btn");
const para = document.querySelector(".para");

let userNameLength;
let emailLength;
let passwordLength;

submitButton.disabled = true;

username.addEventListener("change", (e) => {
  let userValue = e.target.value;
  userNameLength = userValue;
  let chagneToLowerCase = userValue.trim().toLowerCase().split(" ").join("");
  e.target.value = chagneToLowerCase;
  for (let i = 0; i < userValue.length; i++) {
    numsArr.forEach((nums) => {
      if (nums == userValue[i]) {
        count++;
      }
    });
  }
  if (count == 0) {
    submitButton.disabled = true;
    para.innerText = "Username must contain a number";
    para.style.display = "block";
    para.classList.add("active");
  } else {
    para.innerText = "";
    para.style.display = "none";
    para.classList.remove("active");
    count = 0;
    disabled();
  }
});
console.log(count);

const userEmail = document.querySelector("#email");
userEmail.addEventListener("change", (e) => {
  let userEmail = e.target.value;
  emailLength = userEmail;
  if (!userEmail.includes("@") || !userEmail.includes(".com")) {
    para.innerText = "Email is not correct";
    para.style.display = "block";
    para.classList.add("active");
    disabled();
  } else {
    para.innerText = "";
    para.style.display = "none";
    para.classList.remove("active");
  }
});

const password = document.querySelector("#pass");
password.addEventListener("change", (e) => {
  let userPassword = e.target.value;
  passwordLength = userPassword;
  for (let i = 0; i < userPassword.length; i++) {
    numsArr.forEach((nums) => {
      if (nums == userPassword[i]) {
        count++;
      }
    });
    if (upperCase.includes(userPassword[i])) {
      count1++;
    }
  }

  if (count == 0 || count1 == 0) {
    para.innerText = "Password must contain an Uppercase and a Number";
    para.style.display = "block";
    para.classList.add("active");
  } else {
    count = 0;
    count1 = 0;
    para.innerText = "";
    para.style.display = "none";
    para.classList.remove("active");
    disabled();
  }
});

function disabled() {
  if (!userNameLength || !passwordLength || !emailLength) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function passlength() {}

const submitForm = document.querySelector("#form-Submit");
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.querySelector("#email");
  console.log(emailInput.value);
});
