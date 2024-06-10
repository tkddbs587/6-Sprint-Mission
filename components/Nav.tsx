import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className={styles.Nav}>
      <Image
        className={styles.panda_logo}
        src="../images/panda_logo.svg"
        alt="판다로고"
        width={153}
        height={51}
      />
      <Image
        className={styles.mobile_logo}
        src="../images/panda_logo_text.svg"
        alt="모바일상단로고"
        width={81}
        height={40}
      />
      <div className={styles.links}>
        <Link
          href="/boards"
          className={pathname === "/boards" ? styles.active : ""}
        >
          자유게시판
        </Link>
        <Link href="/items">중고마켓</Link>
      </div>

      <Image
        className={styles.logo}
        src="../images/logo.svg"
        alt="상단로고"
        width={40}
        height={40}
      />
    </div>
  );
};

export default Nav;
