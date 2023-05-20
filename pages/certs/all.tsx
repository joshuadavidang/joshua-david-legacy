import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { CertificatesData } from '../../data/certs';

const All = () => {
  return (
    <Box className="pt-16 pb-24 md:pb-16 flex flex-col items-center h-screen overflow-scroll">
      <div className="w-11/12 md:w-1/2">
        {CertificatesData.map(({ id, name, image }) => (
          <div key={name} className="pt-12">
            <Link href={`/certs/${id}`}>
              <Image src={image} alt="list_of_certs" />
            </Link>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default All;
