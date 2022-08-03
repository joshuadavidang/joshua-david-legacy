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
        <span className="hover:bg-gray p-2 rounded cursor-pointer">
          <SunIcon
            className="w-6 h-6 text-white"
            role="button"
            onClick={() => setTheme("light")}
          />
        </span>
      );
    } else {
      return (
        <span className="hover:bg-lightGray p-2 rounded cursor-pointer">
          <MoonIcon
            className="w-6 h-6 text-gray-900"
            role="button"
            onClick={() => setTheme("dark")}
          />
        </span>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
}
