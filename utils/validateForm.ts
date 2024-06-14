export function validateEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email) {
    return "이메일을 입력해주세요.";
  } else if (!emailRegex.test(email)) {
    return "잘못된 이메일 형식입니다.";
  } else {
    return "";
  }
}

export function validateNickname(nickname: string) {
  if (!nickname) {
    return "닉네임을 입력해주세요.";
  } else {
    return "";
  }
}

export function validatePassword(password: string) {
  if (!password) {
    return "비밀번호를 입력해주세요";
  } else if (password.length < 8) {
    return "비밀번호를 8자 이상 입력해주세요.";
  } else {
    return "";
  }
}

export function validatePasswordConfirmation(
  password: string,
  passwordConfirmation: string
) {
  if (password !== passwordConfirmation) {
    return "비밀번호가 일치하지 않습니다.";
  }
  return "";
}
