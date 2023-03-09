import Head from 'next/head';
import Script from 'next/script';

export default function Game() {
  return (
    <>
      <Head>
        <title>My Game</title>
      </Head>

      <Script type='module' src='game/overworld.js' />
      <Script type='module' src='game/directionInput.js' />
      <Script type='module' src='game/gameObject.js' />
      <Script type='module' src='game/sprite.js' />
      <Script type='module' src='game/person.js' />
      <Script type='module' src='game/overworldMap.js' />

      <Script type='module' src='game/init.js' />
      <div className='h-[100vh] bg-gray-600 flex justify-center items-center'>
        <div className='game-container scale-125'>
          <canvas
            className='game-canvas border-2 border-gray-300'
            width='700px'
            height='400px'
          />
        </div>
      </div>
    </>
  );
}
