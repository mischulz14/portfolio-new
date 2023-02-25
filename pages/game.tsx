import Head from 'next/head';
import Script from 'next/script';

export default function Game() {
  return (
    <>
      <Head>
        <title>My Game</title>
      </Head>
      <div id='game-container'>
        <canvas id='game-canvas' />
      </div>
      <button className='test'>Click</button>
      <Script src='game/init.js' />
    </>
  );
}
