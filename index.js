const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#email_error");
const passwordError = document.querySelector("#password_error");
const loginButton = document.querySelector("#login_button");

let emailHasError = true;
let passwordHasError = true;

function validateForm() {
  // 만약 이메일 값도 맞는 형식이고
  // 패스워드도 맞는 형식이면
  // 버튼을 활성화
  if (emailHasError === false && passwordHasError === false) {
    loginButton.removeAttribute("disabled");
  } else {
    loginButton.setAttribute("disabled", true);
  }
}

function handleEmailFocusout(e) {
  const emailValue = email.value;
  const emailForm = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (emailValue === "") {
    // 이메일 값이 없을때,,
    emailError.textContent = "이메일을 입력해주세요";
    email.classList.add("input_error");
    emailHasError = true;
  } else if (emailValue.match(emailForm) === null) {
    // 이메일 형식이 아닐때,,
    emailError.textContent = "잘못된 이메일 형식입니다";
    email.classList.add("input_error");
    emailHasError = true;
  } else {
    // 이메일 형식일 때,,
    emailError.textContent = "";
    email.classList.remove("input_error");
    emailHasError = false;
  }
  validateForm();
}

function handlePasswordFocusout(e) {
  const passwordValue = password.value;
  if (passwordValue === "") {
    passwordError.textContent = "비밀번호를 입력해주세요";
    password.classList.add("input_error");
    passwordHasError = true;
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요";
    password.classList.add("input_error");
    passwordHasError = true;
  } else {
    passwordError.textContent = "";
    password.classList.remove("input_error");
    passwordHasError = false;
  }
  validateForm();
}

email.addEventListener("focusout", handleEmailFocusout);
password.addEventListener("focusout", handlePasswordFocusout);
