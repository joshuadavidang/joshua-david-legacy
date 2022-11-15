import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import MobileNavBar from "../../components/MobileNavBar";
import { certificatesData } from "../../data/certificates";
import Link from "next/link";

export default function MyCertificate() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

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

        <main className="flex md:flex-row flex-col md:gap-32 items-center md:justify-center md:p-0 pt-28 h-screen text-center">
          <div className="w-11/12 md:w-1/2">
            {certificatesData.map((cert) => (
              <div key={cert.name}>
                {id == cert.id ? (
                  <Image
                    src={cert.image}
                    alt="list_of_certs"
                    layout="responsive"
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
