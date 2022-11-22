import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Layout(props) {
  const { children } = props;

  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const closeBurger = () => {
    setHamburger(false);
  };

  return (
    <>
      <Head>
        <title>Joshua David</title>
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white dark:bg-midnight">
        <nav className="fixed hidden md:block z-50">
          <NavBar />
        </nav>

        <nav className="fixed md:hidden block z-50">
          <MobileNavBar
            toggleHamburger={toggleHamburger}
            hamburger={hamburger}
          />
        </nav>

        <main onClick={closeBurger}>{children}</main>
      </div>
    </>
  );
}
