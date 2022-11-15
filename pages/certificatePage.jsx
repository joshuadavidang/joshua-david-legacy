import Image from "next/image";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import Head from "next/head";
import { certificatesData } from "../data/certificates";
import Link from "next/link";

export default function CertificatePage() {
  return (
    <>
      <Head>
        <title>Joshua David</title>
        <meta name="description" content="joshua david's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white dark:bg-black">
        <nav className="fixed hidden md:block">
          <NavBar />
        </nav>

        <nav className="fixed md:hidden block z-50">
          <MobileNavBar />
        </nav>

        <main className="pt-16 pb-24 md:pb-16 flex flex-col items-center h-screen overflow-scroll">
          <div className="w-11/12 md:w-1/2">
            {certificatesData.map((cert) => (
              <div key={cert.name} className="pt-12">
                <Link href={`certificatePage/${cert.id}`}>
                  <Image
                    src={cert.image}
                    alt="list_of_certs"
                    layout="responsive"
                  />
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
