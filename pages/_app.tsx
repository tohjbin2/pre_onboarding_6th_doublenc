import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles/Globalstyle';

import Nav from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>doublenc</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
