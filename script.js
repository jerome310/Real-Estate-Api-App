// Sign Up File
let signUpBtn = document.querySelector(".sign-up-button");
let btns = document.querySelectorAll(".social-icon-container");
let form = document.getElementById("form");
let input = document.querySelector(".email-input");
let displayValue = [];

// Socail Media Icon Buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Please, fill out the input fields above");
  });
});

// Keep Input Value from clearing on refresh
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Login Input Fields Authenification Section
signUpBtn.addEventListener("click", () => {
  //Email Address Logic
  let inputValue = input.value;
  //displayValue.push(inputValue);
  if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    input.classList.add("correct-placeholder-color");
    input.style.backgroundColor = "";
    document.querySelector(".email-input").placeholder = "Email Address";
  } else {
    input.style.backgroundColor = "#ffcccb";
    document.querySelector(".email-input").placeholder = "Valid Email Required";
    input.classList.add("wrong-placeholder-color");
  }
  input.value = "";

  // Password Logic
  // Regex Logic: Needs eight characters, 1 uppercase, 1 lowercase and 1 number
  let passwordValue = password.value;
  let incorrectPasswordText = document.querySelector(
    ".incorrect-password-text"
  );
  displayValue.push(inputValue, passwordValue);
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  console.log(displayValue)
  if (passwordValue.match(regex)) {
    password.style.backgroundColor = "";
    document.querySelector(".password-input").placeholder = "";
    incorrectPasswordText.textContent = "";
    incorrectPasswordText.style.color = "";
  } else {
    password.style.backgroundColor = "#ffcccb";
    document.querySelector(".password-input").placeholder = "Incorrect Password";
    password.classList.add("incorrect-password-color");
    incorrectPasswordText.textContent =
      "Needs 8 characters, 1 uppercase/lowercase and 1 number";
      incorrectPasswordText.style.color = "#ffcccb";
  }
  password.value = "";

  
  // Both Input Fields Homepage Logic
  if (
    inputValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/) && passwordValue.match(regex)
  ) {
    location.href = "/homepage.html";
  }
});

// NEXT TO WORK ON ↓
let password = document.querySelector(".password-input");
let closeEye = document.querySelector(".close-eye");
let openEye = document.querySelector('.open-eye');

// Password Eyeball Logic
closeEye.addEventListener('click', () => {
  // Toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (closeEye.classList.contains("close-eye")) {
    closeEye.classList.add("remove-closed-eye");
    openEye.classList.add("add-open-eye");
  }
  
});


openEye.addEventListener('click', () => {
  const type =
  password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  
  if (openEye.classList.contains("open-eye")) {
    openEye.classList.remove("add-open-eye");
    closeEye.classList.remove("remove-closed-eye");
  }
})
