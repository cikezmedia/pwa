import { useState } from 'react';
import Head from 'next/head';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.png' />
        </Head>

        <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-6xl font-bold'>NEXT PWA</h1>
          <p className='pt-10 pb-10 text-2xl'>
            {count == 0
              ? 'No Click Yet'
              : `Clicked ${count == 1 ? `${count} Time` : `${count} Times`}`}
          </p>
          <button
            className='bg-black rounded-xl text-white  p-2 px-10 text-xl font-bold'
            onClick={() => setCount(count + 1)}
          >
            Click Here
          </button>
        </main>

        <footer className='flex h-24 w-full items-center justify-center border-t'>
          <a
            className='flex items-center justify-center gap-2'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            NEXT PWA - All Rights Reserved.
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
