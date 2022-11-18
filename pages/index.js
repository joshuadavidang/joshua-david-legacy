import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";

export default function Layout(props) {
  const { children } = props;

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
          <MobileNavBar />
        </nav>

        <main>{children}</main>
      </div>
    </>
  );
}
