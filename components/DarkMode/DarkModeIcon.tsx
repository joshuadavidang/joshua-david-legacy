import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkModeIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = () => {
    toggleColorMode();
    const styleEl = document.createElement("style");
    const cssText = document.createTextNode(
      "html * { transition: color, background-color 0.3s ease-out!important }"
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 300);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-2 rounded cursor-pointer ${
        colorMode === "dark"
          ? "hover:bg-gray hover:text-white"
          : "hover:bg-white hover:text-black"
      }`}
    >
      {colorMode === "light" ? (
        <MoonIcon className="w-6 h-6 md:w-5 md:h-5" role="button" />
      ) : (
        <SunIcon className="w-6 h-6 md:w-5 md:h-5" role="button" />
      )}
    </div>
  );
};

export default DarkModeIcon;
