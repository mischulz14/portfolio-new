import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import ButtonRounded from '@/components/atoms/ButtonRounded';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <meta></meta>
      </Head>
      <div className='h-[100vh] w-[100vw] flex items-center justify-center flex-col relative'>
        <h1 className='mb-6'>How do you want to get to know me?</h1>
        <div className='dreieck absolute h-20 w-20  translate-y-10 clip-triangle border-2 bg-black' />
        <div>
          <ButtonRounded>Hi</ButtonRounded>
        </div>
        <div className='flex gap-8'>
          <ButtonRounded>Hi</ButtonRounded>
          <ButtonRounded>Hi</ButtonRounded>
        </div>
      </div>
    </>
  );
}
