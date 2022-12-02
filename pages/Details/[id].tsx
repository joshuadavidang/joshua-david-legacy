import { useRouter } from "next/router";
import Image from "next/image";
import { CertificatesData } from "../../data/certificates";

const MyCertificate = () => {
  const router = useRouter();
  let { id } = router.query;
  const new_id = parseInt(id as string);

  return (
    <main className="flex md:flex-row flex-col md:gap-32 items-center md:justify-center md:p-0 pt-28 h-screen text-center">
      <div className="w-11/12 md:w-1/2">
        {CertificatesData.map((cert) => (
          <div key={cert.name}>
            {new_id == cert.id && (
              <Image src={cert.image} alt="list_of_certs" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyCertificate;
