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
      <div className='h-[100vh] w-[100vw] gap-10 flex items-center justify-center flex-col relative'>
        <UpAndDownHover>
          <h1 className='mb-8 font-bold text-lg'>
            How do you want to get to know me?
          </h1>
        </UpAndDownHover>
        <div className='absolute h-40 w-40  translate-y-12 z-[-1] border-2 rotate-45' />
        <div>
          <Link href={'/book-portfolio'}>
            <ButtonRounded>Plain and Simple</ButtonRounded>
          </Link>
        </div>
        <div className='flex gap-32'>
          <ButtonRounded>In 3D</ButtonRounded>
          <Link href={'/game'}>
            <ButtonRounded>In a game</ButtonRounded>
          </Link>
        </div>
        <div>
          <ButtonRounded>Not at all</ButtonRounded>
        </div>
      </div>
    </>
  );
}
