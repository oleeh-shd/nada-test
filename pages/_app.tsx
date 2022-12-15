import '../assets/fonts.scss';
import '../assets/reset.scss';
import '../assets/styles.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
