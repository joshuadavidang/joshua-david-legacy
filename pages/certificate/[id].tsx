import { useRouter } from "next/router";
import Image from "next/image";
import { certificatesData } from "../../data/certificates";

export default function MyCertificate() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="flex md:flex-row flex-col md:gap-32 items-center md:justify-center md:p-0 pt-28 h-screen text-center">
      <div className="w-11/12 md:w-1/2">
        {certificatesData.map((cert) => (
          <div key={cert.name}>
            {id == cert.id && (
              <Image src={cert.image} alt="list_of_certs" layout="responsive" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
