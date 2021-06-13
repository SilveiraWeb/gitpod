//import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from 'ui/themes/theme'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return;
  <>
    <Head>
      <title>E-diaristas</title>
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>;
  </>
}

export default MyApp;
