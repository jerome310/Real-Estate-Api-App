// Sign Up File
let signUpBtn = document.querySelector(".sign-up-button");
let btns = document.querySelectorAll('.sign-up-btns');
console.log(btns)

signUpBtn.addEventListener('click', () => {
    location.href = "/homepage.html";
})

// Sign In Buttons
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Please, fill out the input fields above')
  })
});
