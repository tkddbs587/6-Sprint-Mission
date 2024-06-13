import styles from "@/components/LoginSignupForm.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginSignupForm = ({ type }) => {
  const isSignUp = type === "signup";
  const [formValues, setFormValues] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });
  const { email, nickname, password, passwordCheck } = formValues;
  const [errors, setErrors] = useState({
    emailError: "",
    nicknameError: "",
    passwordError: "",
    passwordCheckError: "",
  });
  const { emailError, nicknameError, passwordError, passwordCheckError } =
    errors;

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!email) {
      return "이메일을 입력해주세요.";
    } else if (!emailRegex.test(email)) {
      return "잘못된 이메일 형식입니다.";
    } else {
      return "";
    }
  }

  function validateNickname(nickname) {
    if (!nickname) {
      return "닉네임을 입력해주세요.";
    } else {
      return "";
    }
  }

  function validatePassword(password) {
    if (!password) {
      return "비밀번호를 입력해주세요";
    } else if (password.length < 8) {
      return "비밀번호를 8자 이상 입력해주세요.";
    } else {
      return "";
    }
  }

  function validatePasswordCheck(password, passwordCheck) {
    if (password !== passwordCheck) {
      return "비밀번호가 일치하지 않습니다.";
    }
  }

  function handleBlurChange(field) {
    let error = "";
    switch (field) {
      case "emailError":
        error = validateEmail(email);
        break;
      case "nicknameError":
        error = validateNickname(nickname);
        break;
      case "passwordError":
        error = validatePassword(password);
        break;
      case "passwordCheckError":
        error = validatePasswordCheck(password, passwordCheck);
        break;
      default:
        break;
    }
    setErrors({ ...errors, [field]: error });
  }

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={styles.LoginSignupForm}>
      <Link className={styles.logo} href="/">
        <Image
          src="/images/panda_logo.svg"
          width={396}
          height={132}
          alt="판다마켓 로고"
        />
      </Link>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.section}>
            <label className={styles.label}>이메일</label>
            <input
              onChange={onChangeInput}
              onBlur={(e) => handleBlurChange("emailError")}
              className={`${styles.input} ${emailError && styles.input_error}`}
              name="email"
              type="email"
              value={email}
              placeholder="이메일을 입력해주세요"
            />
            {emailError && <div className={styles.error}>{emailError}</div>}
          </div>
          {isSignUp && (
            <div className={styles.section}>
              <label className={styles.label}>닉네임</label>
              <input
                onChange={onChangeInput}
                onBlur={(e) => handleBlurChange("nicknameError")}
                name="nickname"
                className={`${styles.input} ${
                  nicknameError && styles.input_error
                }`}
                value={nickname}
                placeholder="닉네임을 입력해주세요"
              />
              {nicknameError && (
                <div className={styles.error}>{nicknameError}</div>
              )}
            </div>
          )}
          <div className={styles.section}>
            <label className={styles.label}>비밀번호</label>
            <input
              onChange={onChangeInput}
              onBlur={(e) => handleBlurChange("passwordError")}
              name="password"
              className={`${styles.input} ${
                passwordError && styles.input_error
              }`}
              type="password"
              value={password}
              placeholder="비밀번호를 입력해주세요"
            />
            <Image
              className={styles.password_icon}
              width={24}
              height={24}
              src="/images/ic_eyes.svg"
              alt="비밀번호 숨김 아이콘"
            />
            {passwordError && (
              <div className={styles.error}>{passwordError}</div>
            )}
          </div>
          {isSignUp && (
            <div className={styles.section}>
              <label className={styles.label}>비밀번호 확인</label>
              <input
                onChange={onChangeInput}
                onBlur={(e) => handleBlurChange("passwordCheckError")}
                name="passwordCheck"
                className={`${styles.input} ${
                  passwordCheckError && styles.input_error
                }`}
                type="password"
                value={passwordCheck}
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <Image
                className={styles.password_icon}
                width={24}
                height={24}
                src="/images/ic_eyes.svg"
                alt="비밀번호 숨김 아이콘"
              />
              {passwordCheckError && (
                <div className={styles.error}>{passwordCheckError}</div>
              )}
            </div>
          )}
          <button className={styles.button} type="button">
            {isSignUp ? "회원가입" : "로그인"}
          </button>
        </form>
      </div>
      <div className={styles.social_box}>
        <div className={styles.social_login}>
          <div className={styles.login_text}>간편 로그인하기</div>
          <div className={styles.social_icon}>
            <Link href="https://www.google.com/">
              <Image
                width={42}
                height={42}
                src="/images/ic_google.svg"
                alt="구글아이콘"
              />
            </Link>
            <Link href="https://www.kakaocorp.com/page/">
              <Image
                width={42}
                height={42}
                src="/images/ic_kakao.svg"
                alt="카카오아이콘"
              />
            </Link>
          </div>
        </div>

        <div>
          {isSignUp ? (
            <div className={styles.signup}>
              이미 회원이신가요?{" "}
              <Link className={styles.login_signup_link} href="/login">
                로그인
              </Link>
            </div>
          ) : (
            <div className={styles.signup}>
              판다마켓이 처음이신가요?{" "}
              <Link className={styles.login_signup_link} href="/signup">
                회원가입
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;
