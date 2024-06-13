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
    password_check: "",
  });

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
              className={styles.input}
              name="email"
              id="email"
              type="email"
              value={formValues.email}
              placeholder="이메일을 입력해주세요"
            />
            {/* <div id="email_error" className={styles.error}></div> */}
          </div>
          {isSignUp && (
            <div className={styles.section}>
              <label className={styles.label}>닉네임</label>
              <input
                onChange={onChangeInput}
                name="nickname"
                className={styles.input}
                id="nickname"
                value={formValues.nickname}
                placeholder="닉네임을 입력해주세요"
              />
              {/* <div id="nickname_error" className={styles.error}></div> */}
            </div>
          )}
          <div className={styles.section}>
            <label className={styles.label}>비밀번호</label>
            <input
              onChange={onChangeInput}
              name="password"
              className={styles.input}
              id="password"
              type="password"
              value={formValues.password}
              placeholder="비밀번호를 입력해주세요"
            />
            <Image
              className={styles.password_icon}
              width={24}
              height={24}
              src="/images/ic_eyes.svg"
              alt="비밀번호 숨김 아이콘"
            />
            {/* <div id="password_error" className="error"></div> */}
          </div>
          {isSignUp && (
            <div className={styles.section}>
              <label className={styles.label}>비밀번호 확인</label>
              <input
                onChange={onChangeInput}
                name="password_check"
                className={styles.input}
                id="password_check"
                type="password"
                value={formValues.password_check}
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <Image
                className={styles.password_icon}
                width={24}
                height={24}
                src="/images/ic_eyes.svg"
                alt="비밀번호 숨김 아이콘"
              />
              {/* <div id="password_check_error" className={styles.error}></div> */}
            </div>
          )}
          <button className={styles.button} type="button" id="signup_button">
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
