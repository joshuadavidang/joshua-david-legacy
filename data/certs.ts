import GoogleIgnite from '@/images/Certs/cert_two.png';
import CodeIT from '@/images/Certs/cert_one.png';
import CodeXtreme from '@/images/Certs/cert_three.png';

export interface CertificatesDataType {
  id: number;
  name: string;
  image: any;
}

export const CertificatesData: CertificatesDataType[] = [
  {
    id: 1,
    name: 'GoogleIgnite',
    image: GoogleIgnite,
  },
  {
    id: 2,
    name: 'CodeIT',
    image: CodeIT,
  },
  {
    id: 3,
    name: 'CodeXtreme',
    image: CodeXtreme,
  },
];
