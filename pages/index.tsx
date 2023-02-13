import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <meta></meta>
      </Head>
      <div>
        <h1>How do you want to get to know me?</h1>
        <div className='dreieck'></div>
      </div>
    </>
  );
}
