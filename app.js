const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const forgot_password_link = document.querySelector("#forgot-password-link");
const container = document.querySelector(".container");
const sign_in_form = document.querySelector(".sign-in-form");
const forgot_password_form = document.querySelector(".forgot-password-form");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

forgot_password_link.addEventListener('click', (e) => {
    e.preventDefault();
    sign_in_form.style.display = 'none';
    forgot_password_form.style.display = 'block';
});