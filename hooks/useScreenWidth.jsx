import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState();
  const [isTabletSize, setIsTabletSize] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);

  const checkTabletMobileSize = (width) => {
    if (767 < width && width < 1200) {
      setIsTabletSize(true);
      setIsMobileSize(false);
    } else if (width < 768) {
      setIsMobileSize(true);
      setIsTabletSize(false);
    } else {
      setIsMobileSize(false);
      setIsTabletSize(false);
    }
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth); // 처음 렌더링 될 때의 width값
    checkTabletMobileSize(window.innerWidth);

    const handleResize = () => {
      // 이벤트 핸들러 화면 바뀔 때 마다 실행!
      setScreenWidth(window.innerWidth);
      checkTabletMobileSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // 다른 컴포넌트가 렌더링 될 때 현재 컴포넌트에 추가돼있는 이벤트 리스너 삭제
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenWidth, isTabletSize, isMobileSize };
};

export default useScreenWidth;
