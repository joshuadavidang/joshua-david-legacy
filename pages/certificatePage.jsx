import Image from "next/image";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import Head from "next/head";
import { certificatesData } from "../data/certificates";
import Link from "next/link";

export default function CertificatePage() {
  return (
    <>
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
    </>
  );
}
