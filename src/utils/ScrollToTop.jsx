import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = window.__lenisInstance;
    if (lenis) {
      lenis.stop(); 
      lenis.scrollTo(0, { immediate: true }); 
      lenis.start();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
