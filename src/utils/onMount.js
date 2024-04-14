import { useEffect } from "react";

export const useResize = (setMobile) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setMobile(true);
      else setMobile(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setMobile]);
};

export const useScrollNav = (setBgChange) => {
  useEffect(() => {
    const handleScrollNav = () => {
      setBgChange(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, [setBgChange]);
};
export const useMobileBodyFix = (isMobile, isActive) => {
  useEffect(() => {
    const handleBodyFix = () => {
      if (isMobile && isActive) {
        document.body.style.position = "fixed";
      }
    };

    handleBodyFix();

    return () => {
      document.body.style.position = "block";
    };
  }, [isMobile, isActive]);
};
AbortController;
