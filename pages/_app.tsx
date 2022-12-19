import '../assets/reset.scss';
import '../assets/styles.scss';
import '../assets/fonts.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
