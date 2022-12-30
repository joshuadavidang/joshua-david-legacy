import Head from "next/head";
import MobileNavBar from "../components/NavBar/MobileNavBar";
import NavBar from "../components/NavBar/NavBar";
import useToggle from "../hooks/useToggle";
import index from "../styles/index.module.css";

export default function Layout(props: { children: any }) {
  const { children } = props;
  const [hamburger, closeBurger, setHamburger] = useToggle(false);

  console.log(hamburger);

  return (
    <div>
      <Head>
        <title>Joshua David</title>
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white dark:bg-midnight">
        <nav className="fixed hidden md:block z-50">
          <NavBar />
        </nav>

        <nav className={`fixed md:hidden block z-50 ${hamburger ? "" : ""}`}>
          <MobileNavBar toggleHamburger={setHamburger} hamburger={hamburger} />
        </nav>

        <main onClick={closeBurger}>{children}</main>
      </div>
    </div>
  );
}
