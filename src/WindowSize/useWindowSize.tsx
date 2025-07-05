import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    handleSize();
  }, []);

  const handleSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };
  return windowSize;
};

export default useWindowSize;
