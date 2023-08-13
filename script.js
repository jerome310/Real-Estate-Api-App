// Sign Up File
let signUpBtn = document.querySelector(".sign-up-button");
let btns = document.querySelectorAll('.sign-up-btns');
let form = document.getElementById('form');
let input = document.querySelector('.email-input');
let displayValue = [];

// Sign In Buttons
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Please, fill out the input fields above')
  })
});

//Sign In Input Fields
form.addEventListener("submit", (e) => {
  e.preventDefault();
});


// SUBMIT BUTTON TO GO TO MORTGAGE PAGE
// signUpBtn.addEventListener("click", () => {
//   if (inputFields()) {
//     location.href = "/homepage.html";
//   } else {
//     console.log("Didn't Work")
//   }
// });

// NEXT THING TO WORK ON ↓

// WORKING ON FEATURE FOR EMAIL AND PASSWORD INPUT FIELDS
signUpBtn.addEventListener("click", () => {
  let inputValue = input.value;
  displayValue.push(inputValue);
  console.log(displayValue);
  if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)
  ) {
location.href = "/homepage.html";
//subButton.disabled = true;
} else {
  input.style.backgroundColor = "#ffcccb";
  input.placeholder.color = 'red'
  document.querySelector(".email-input").placeholder = "Valid Email Required";
  document.querySelector(".email-input").placeholder.color = "black";
    console.log('WRONG!')
    // email.style.backgroundColor = "";
    // validText.style.color = "";
    // validText.textContent = "";
    // popupEmail.textContent = email.value;
  }
  input.value = "";
})


const inputFields = () => {
  let inputValue = input.value;
  displayValue.push(inputValue);
  console.log(displayValue);
  // if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
  //   location.href = "/homepage.html";
  //   email.style.backgroundColor = "#ffcccb";
  //   validText.style.color = "red";
  //   validText.textContent = "Valid email required";
  //   popupEmail.textContent = "";
  //   subButton.disabled = true;
  //   parentModal.style.display = "none";
  // } else {
  //   email.style.backgroundColor = "";
  //   validText.style.color = "";
  //   validText.textContent = "";
  //   popupEmail.textContent = email.value;
  //   parentModal.style.display = "block";
  // }

  // PUT IN YOUR REGEX LOGIC FOR PASSWORD 
  // if ("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$") {
  // } else {
  // }

  input.value = "";
}
