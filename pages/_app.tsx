import GlobalStyles from '../styles/Global';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import AOS from 'aos';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
