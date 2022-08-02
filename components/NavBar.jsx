import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="bg-white p-8 flex justify-end flex-row gap-28 pr-24 w-screen">
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contacts</Link>
      </div>
    </>
  );
}
