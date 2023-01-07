import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      onClick={toggleColorMode}
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

export default DarkMode;
