import Image from "next/image";
import { certificatesData } from "../../data/certificates";
import Link from "next/link";

export default function CertificatePage() {
  return (
    <main className="pt-16 pb-24 md:pb-16 flex flex-col items-center h-screen overflow-scroll">
      <div className="w-11/12 md:w-1/2">
        {certificatesData.map(({ id, name, image }) => (
          <div key={name} className="pt-12">
            <Link href={`${id}`}>
              <Image src={image} alt="list_of_certs" layout="responsive" />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
