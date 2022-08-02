import Head from "next/head";
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua David Ang</title>
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <header className="fixed hidden md:block">
          <NavBar />
        </header>

        <main className="md:px-36 md:py-16 h-screen w-screen">
          <LandingPage />
        </main>
      </div>
    </>
  );
}
