import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import ButtonRounded from '@/components/atoms/ButtonRounded';
import UpAndDownHover from '@/animations/UpAndDownHover';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <meta></meta>
      </Head>
      <div className='h-[100vh] w-[100vw] flex items-center justify-center flex-col'>
        <UpAndDownHover>
          <h1 className='mb-8 font-bold text-lg'>
            How do you want to get to know me?
          </h1>
        </UpAndDownHover>

        <div className='flex gap-24 p-10'>
          <Link href={'/book-portfolio'}>
            <ButtonRounded>Plain and Simple</ButtonRounded>
          </Link>
          <ButtonRounded>In 3D</ButtonRounded>
          <Link href={'/game'}>
            <ButtonRounded>In a game</ButtonRounded>
          </Link>
          <ButtonRounded>Not at all</ButtonRounded>
        </div>
      </div>
    </>
  );
}
