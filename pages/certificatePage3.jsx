import Image from "next/image";
import NavBar from "../components/NavBar";
import CertThree from "../public/assets/images/cert_three.png";
import MobileNavBar from "../components/MobileNavBar";
import Head from "next/head";

export default function CertificatePage2() {
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
          <div className="w-11/12 md:w-1/2">
            <Image src={CertThree} alt="cert_one" layout="responsive" />
          </div>
        </main>
      </div>
    </>
  );
}
