import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Image from "next/image";
import Construction from "../public/assets/images/Construction.svg"

export default function Hackathons() {
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

        <main className="flex md:flex-row flex-col md:gap-32 items-center md:justify-center md:p-0 pt-48 h-screen text-center">
          <div className="md:w-3/12 w-8/12">
            <Image src={Construction} alt="building" layout="responsive" />
          </div>

          <div className="flex flex-col">
            <p className="text-blue1 dark:text-blue1 text-2xl md:text-4xl font-sen tracking-tight pt-12">
              under construction
            </p>
          </div>
        </main>

        <footer className="bg-white dark:bg-black pt-16" />
      </div>
    </>
  );
}
