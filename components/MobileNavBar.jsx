import { MenuAlt3Icon } from "@heroicons/react/solid";
import Link from "next/link";
import DarkMode from "./DarkMode";

export default function MobileNavBar() {
  return (
    <div className="flex flex-row items-center justify-end p-3 gap-4">
      <DarkMode />
      <MenuAlt3Icon className=" w-8 h-8" />
    </div>
  );
}
