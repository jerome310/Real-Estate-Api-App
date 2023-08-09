// Sign Up File
let signUpBtn = document.querySelector(".sign-up-button");
let btns = document.querySelectorAll('.sign-up-btns');
console.log(btns)
let form = document.getElementById('form');
let input = document.querySelector('.email-input');

signUpBtn.addEventListener('click', () => {
    location.href = "/homepage.html";
})

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

// NEED TO WORK ON YOUR INPUT BUTTON THIS IS CODE FROM A PREVIOUS PROJECT
subButton.addEventListener("click", () => {
  let inputValue = email.value;
  displayValue.push(inputValue);
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    email.style.backgroundColor = "#ffcccb";
    validText.style.color = "red";
    validText.textContent = "Valid email required";
    popupEmail.textContent = "";
    subButton.disabled = true;
    parentModal.style.display = "none";
  } else {
    email.style.backgroundColor = "";
    validText.style.color = "";
    validText.textContent = "";
    popupEmail.textContent = email.value;
    parentModal.style.display = "block";
  }
  email.value = "";
});
