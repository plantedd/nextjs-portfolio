import Hero from '@/components/Hero';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Christian&apos;s Portfolio</title>
        <meta name="description" content="JB&apos;s Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mb-4'>
        <Hero />
      </div>
    </>
  );
};

export default Home;