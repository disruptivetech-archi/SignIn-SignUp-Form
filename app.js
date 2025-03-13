const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const forgot_password_link = document.querySelector("#forgot-password-link");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

forgot_password_link.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add("forgot-password-mode");
});