import styles from "@/components/LoginSignupForm.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirmation,
} from "../utils/validateForm";
import { signInUser, signUpUser } from "@/api/api";
import { useRouter } from "next/router";

const LoginSignupForm = ({ type }: { type: string }) => {
  const router = useRouter();

  const isSignUp = type === "signup";

  const [formValues, setFormValues] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });
  const { email, nickname, password, passwordConfirmation } = formValues;

  const [errors, setErrors] = useState({
    emailError: "",
    nicknameError: "",
    passwordError: "",
    passwordConfirmationError: "",
  });
  const {
    emailError,
    nicknameError,
    passwordError,
    passwordConfirmationError,
  } = errors;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        router.push("/");
      }
    }
  }, []);

  const isFormValid = () => {
    if (isSignUp) {
      return (
        email &&
        nickname &&
        password &&
        passwordConfirmation &&
        !emailError &&
        !nicknameError &&
        !passwordError &&
        !passwordConfirmationError
      );
    } else {
      return email && password && !emailError && !passwordError;
    }
  };

  function handleBlurChange(field: string) {
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
      case "passwordConfirmationError":
        error = validatePasswordConfirmation(password, passwordConfirmation);
        break;
      default:
        break;
    }
    setErrors({ ...errors, [field]: error });
  }

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignUp) {
      const userId = await signUpUser(formValues);
      console.log(userId);
      if (userId) {
        router.push("/login");
      }
    } else {
      const userId = await signInUser({ email, password });
      if (userId) {
        router.push("/");
      }
    }
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
        <form className={styles.form} onSubmit={handleFormSubmit}>
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
                onBlur={(e) => handleBlurChange("passwordConfirmationError")}
                name="passwordConfirmation"
                className={`${styles.input} ${
                  passwordConfirmationError && styles.input_error
                }`}
                type="password"
                value={passwordConfirmation}
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <Image
                className={styles.password_icon}
                width={24}
                height={24}
                src="/images/ic_eyes.svg"
                alt="비밀번호 숨김 아이콘"
              />
              {passwordConfirmationError && (
                <div className={styles.error}>{passwordConfirmationError}</div>
              )}
            </div>
          )}
          <button
            className={`${styles.button} ${
              isFormValid() && styles.active_button
            }`}
            type="submit"
            disabled={!isFormValid()}
          >
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
