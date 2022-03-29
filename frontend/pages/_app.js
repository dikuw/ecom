import Page from '../components/Page';
import Router from 'next/router'
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

import '../components/styles/nprogress.css';

export default function app({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}