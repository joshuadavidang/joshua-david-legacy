import Link from "next/link";
import DarkMode from "./DarkMode";

export default function NavBar(props) {
  const { toggleToDark } = props;
  return (
    <>
      <div className="bg-white p-8 flex justify-end flex-row gap-16 pr-24 w-screen">
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contacts</Link>
        <DarkMode toggleToDark={toggleToDark} />
      </div>
    </>
  );
}
