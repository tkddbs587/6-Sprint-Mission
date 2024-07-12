import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Nav = () => {
  const router = useRouter();
  const { pathname } = router;

  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);

    const handleRouteChange = () => {
      const updatedToken = localStorage.getItem("accessToken");
      setAccessToken(updatedToken);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "accessToken") {
        setAccessToken(event.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [router.events]);

  return (
    <div className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-solid border-[#dfdfdf] bg-white px-16 py-10 md:px-24 md:py-10 xl:px-[8vw] xl:py-10">
      <Image
        className="hidden md:block"
        src="../images/panda_logo.svg"
        alt="판다로고"
        width={153}
        height={51}
      />
      <Image
        className="md:hidden"
        src="../images/panda_logo_text.svg"
        alt="모바일상단로고"
        width={81}
        height={40}
      />
      <div className="ml-0 flex items-center md:ml-32">
        <Link
          href="/boards"
          className={`bg-white pl-16 text-16 font-bold text-[#4b5563] no-underline md:p-16 md:text-18 ${pathname === "/boards" ? "text-blue" : ""}`}
        >
          자유게시판
        </Link>
        <Link
          className={`bg-white p-16 text-18 font-bold text-[#4b5563] no-underline md:p-16 md:text-18 ${pathname === "/items" ? "text-blue" : ""} `}
          href="/items"
        >
          중고마켓
        </Link>
      </div>

      {accessToken ? (
        <Image
          className="ml-auto"
          src="../images/logo.svg"
          alt="상단로고"
          width={40}
          height={40}
        />
      ) : (
        <Link
          href="/login"
          className="ml-auto flex h-48 w-128 justify-center rounded-8 bg-blue px-20 py-12 text-16 font-semibold text-white"
        >
          로그인
        </Link>
      )}
    </div>
  );
};

export default Nav;
