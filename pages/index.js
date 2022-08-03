import Head from "next/head";
import LandingPage from "../components/LandingPage";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua David Ang</title>
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white dark:bg-black overflow-hidden">
        <header className="fixed hidden md:block">
          <NavBar />
        </header>

        <header className="md:hidden block">
          <MobileNavBar />
        </header>

        <main className="px-10 md:px-36 md:py-16 md:pt-16 h-screen w-screen">
          <LandingPage />
        </main>
      </div>
    </>
  );
}
