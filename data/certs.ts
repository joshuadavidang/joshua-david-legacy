import GoogleIgnite from '@/images/Certs/cert_two.png';
import CodeIT from '@/images/Certs/cert_one.png';
import CodeXtreme from '@/images/Certs/cert_three.png';
import { randomUniqueId } from '@/helpers/randomUniqueId';

export interface CertificatesDataType {
  id: string;
  name: string;
  image: any;
}

export const CertificatesData: CertificatesDataType[] = [
  {
    id: randomUniqueId(),
    name: 'GoogleIgnite',
    image: GoogleIgnite,
  },
  {
    id: randomUniqueId(),
    name: 'CodeIT',
    image: CodeIT,
  },
  {
    id: randomUniqueId(),
    name: 'CodeXtreme',
    image: CodeXtreme,
  },
];
