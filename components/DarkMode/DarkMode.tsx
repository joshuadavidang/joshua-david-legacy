import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import useToggle from "../../hooks/useToggle";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, x, setMounted] = useToggle();

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div
          className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="w-6 h-6 md:w-5 md:h-5 text-white" role="button" />
        </div>
      );
    } else {
      return (
        <div
          className="hover:bg-lightGray dark:hover:bg-gray p-2 rounded cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon
            className="w-6 h-6 md:w-5 md:h-5 text-black"
            role="button"
          />
        </div>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default DarkMode;
