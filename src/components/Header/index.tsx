import Image from 'next/image';
import styles from './header.module.css';
import logo from 'public/images/logo.svg';
import { LangSwitcher } from '../LangSwitcher';
import { useState } from 'react';
import { MobileMenu } from '@/src/components/MobileMenu';
import Link from 'next/link';
import { DesktopMenu } from '../DesktopMenu';
import { Divider } from '@/src/ui-kit/Divider';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__logoContainer}>
          <Link href='/' className={styles.logo__link}>
            <Image src={logo} alt='Open Bellydance Championship of Poland logo' fill />
          </Link>
        </div>
        <div className={styles.header__langSwitcher}>
          <LangSwitcher />
        </div>
        <DesktopMenu />
        <button type='button' className={styles.header__menuButton} onClick={handleOpen} />
        <div className={styles.dividerWrapper}>
          <Divider />
        </div>
      </header>
      <MobileMenu isOpen={isOpen} onClose={handleClose} />
    </>
  );
};
