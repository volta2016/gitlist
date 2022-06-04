import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme" || "dark")
  );

  const toggleTheme = () => {
    //first we pass the key which can be any name we want and then we pass the value
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (e.matches) {
          setTheme("dark");
          localStorage.setItem("theme", "dark");
        } else {
          setTheme("light");
          localStorage.setItem("theme", "light");
        }
      });
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
