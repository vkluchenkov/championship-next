import clsx from 'clsx';
import styles from './partners.module.css';
import useTranslation from 'next-translate/useTranslation';
import Image, { StaticImageData } from 'next/image';
import aliah from '@/public/images/partners/Aliah.png';
import cpk from '@/public/images/partners/cpk.png';
import dww from '@/public/images/partners/DWW.png';
import btv from '@/public/images/partners/BTV.png';
import Link from 'next/link';

interface PartnersList {
  image: string;
  description: string;
  url: string;
}
const partnersList: PartnersList[] = [
  {
    image: '/images/partners/DWW.png',
    description: 'Dance Weekend in Warsaw festival',
    url: 'https://danceweekend.art',
  },
  {
    image: '/images/partners/Aliah.png',
    description: 'Aliah',
    url: 'https://aliah.dance',
  },
  {
    image: '/images/partners/BTV.png',
    description: 'Bellystream.TV',
    url: 'https://bellystream.tv',
  },
  {
    image: '/images/partners/cpk.png',
    description: '',
    url: 'https://cpk.art.pl',
  },
];

export const Partners: React.FC = () => {
  const { t, lang } = useTranslation();

  const partnersMap = partnersList.map((p, idx) => {
    return (
      <li className={styles.partner} key={p.description}>
        <Link className={styles.imageWrapper} href={p.url} target='_blank'>
          {/* eslint-disable-next-line */}
          <img src={p.image} alt={p.description} className={styles.image} />
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul className={styles.partners}>{partnersMap}</ul>
    </>
  );
};
