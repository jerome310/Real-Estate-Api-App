// Sign Up File
let signUpBtn = document.querySelector(".sign-up-button");
let btns = document.querySelectorAll(".sign-up-btns");
let form = document.getElementById("form");
let input = document.querySelector(".email-input");
let password = document.querySelector(".password-input");
let displayValue = [];

// Sign In Buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Please, fill out the input fields above");
  });
});

//Sign In Input Fields
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// NEXT THING TO WORK ON ↓

// WORKING ON FEATURE FOR EMAIL AND PASSWORD INPUT FIELDS
signUpBtn.addEventListener("click", () => {
  // Email Address Logic
  let inputValue = input.value;
  displayValue.push(inputValue);
  console.log(displayValue);
  if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    //location.href = "/homepage.html";
    input.classList.add("correct-placeholder-color");
    input.style.backgroundColor = "";
    document.querySelector(".email-input").placeholder = "Email Address";
    //subButton.disabled = true;
  } else {
    input.style.backgroundColor = "#ffcccb";
    document.querySelector(".email-input").placeholder = "Valid Email Required";
    input.classList.add("wrong-placeholder-color");
  }
  input.value = "";

  // Password Logic
  let passwordValue = password.value;
  displayValue.push(passwordValue);
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  console.log(displayValue)
  if (passwordValue.match(regex)) {
    console.log("Correct");
  } else {
    console.log("Wrong");
  }
  password.value = "";
});
