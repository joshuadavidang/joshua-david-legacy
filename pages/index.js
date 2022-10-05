import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import LandingPage from "./landingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua David</title>
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white dark:bg-black">
        <nav className="fixed hidden md:block z-50">
          <NavBar />
        </nav>

        <nav className="fixed md:hidden block z-50">
          <MobileNavBar />
        </nav>

        <main className="px-10 md:px-36 md:py-16 pt-16 h-full w-screen">
          <LandingPage />
        </main>

        <footer className="bg-white dark:bg-black md:pt-0 pt-16" />
      </div>
    </>
  );
}
