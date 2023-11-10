import clsx from 'clsx';
import Head from 'next/head';
import { useEffect } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './layout.module.css';
import { motionVariants } from '@/src/ulis/constants';

interface LayoutProps {
  children: any;
  title?: string;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title, className }) => {
  // Handle viewport changes on mobile (and not)
  useEffect(() => {
    const handleVh = () => {
      if (typeof window != 'undefined') {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    };
    handleVh();
    window.addEventListener('resize', handleVh);
    return () => window.removeEventListener('resize', handleVh);
  }, []);

  const Main = (
    <>
      <main className={clsx(styles.main, styles.main_notHome)}>
        <AnimatePresence>
          <motion.div
            className={styles.contentWrapper}
            key={'main'}
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={motionVariants}
            transition={{ type: 'linear', duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );

  return (
    <div className={className ? className : ''}>
      <Head>
        <title>
          {title
            ? title + ' – Open Bellydance Championship of Poland'
            : 'Open Bellydance Championship of Poland'}
        </title>
        <meta name='description' content='International bellydance championship' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='og:title'
          content={
            title
              ? title + ' – Open Bellydance Championship of Poland'
              : 'Open Bellydance Championship of Poland'
          }
        />
        <meta name='og:description' content='International bellydance championship' />
        <meta name='og:image' content='/images/social_poster.jpg' />
        <meta name='og:image:width' content='1500' />
        <meta name='og:image:height' content='1500' />
        <link rel='icon' href='/images/favicon.png' />
      </Head>
      <Header />
      {Main}
    </div>
  );
};
