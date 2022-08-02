import Head from "next/head";
import { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     console.log("Dark mode enabled on system");
  //     setIsDark(true);
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     setIsDark(false);
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  const toggleToDark = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Head>
        <title>Joshua David Ang</title>
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <header className="fixed hidden md:block">
          <NavBar isDark={isDark} toggleToDark={toggleToDark} />
        </header>

        <main className="md:px-36 md:py-16 h-screen w-screen">
          <LandingPage />
        </main>
      </div>
    </>
  );
}
