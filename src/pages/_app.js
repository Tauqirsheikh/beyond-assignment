import ThemeProvider from '@/theme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Head from 'next/head';

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>
          ChatBot
        </title>
      </Head>
      <GoogleOAuthProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </>
  )
}
