import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to specific element if hash exists
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Otherwise scroll to top on route change
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // change to "smooth" if you want animation
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHashElement;
