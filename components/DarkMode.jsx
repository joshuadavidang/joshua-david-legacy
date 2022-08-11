import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

export default function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <span
          className="hidden md:block hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="w-6 h-6 md:w-5 md:h-5 text-white" role="button" />
        </span>
      );
    } else {
      return (
        <span
          className="hidden md:block hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon
            className="w-6 h-6 md:w-5 md:h-5 text-black"
            role="button"
          />
        </span>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
}
