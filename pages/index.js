import Head from "next/head";
import Landing from "../components/Landing";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>Joshua David Ang - Staging</title>
=======
        <title>Joshua David</title>
>>>>>>> f662e0a7c25b480d084891a736c6a587baa77581
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white dark:bg-black">
        <nav className="fixed hidden md:block">
          <NavBar />
        </nav>

        <nav className="md:hidden block">
          <MobileNavBar />
        </nav>

        <main className="px-10 md:px-36 md:py-16 md:pt-16 h-screen w-screen overflow-scroll">
          <Landing />
        </main>
      </div>
    </>
  );
}
