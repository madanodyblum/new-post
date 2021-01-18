import { MediaType } from "@Constants/types";
import { useEffect, useState } from "react";

const useResponsive = () => {
  // Add a second state variable "height" and default it to the current window height
  const [responsive, setResponsive] = useState(MediaType.LG);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1440) {
        setResponsive(MediaType.LG);
      } else if (window.innerWidth < 1440 && window.innerWidth >= 1025) {
        setResponsive(MediaType.MD);
      } else if (window.innerWidth < 1025 && window.innerWidth >= 625) {
        setResponsive(MediaType.SM);
      } else if (window.innerWidth < 625) {
        setResponsive(MediaType.XS);
      }
    };
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { responsive, setResponsive };
};

export default useResponsive;
