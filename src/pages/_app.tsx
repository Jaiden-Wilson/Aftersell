import { withPasswordProtect } from '@storyofams/next-password-protect';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';

import { Providers } from '~components';
import { seo } from '~config';
import { initSentry } from '~lib';
import CSSreset from '~styles/CSSreset';

import '../../public/static/fonts/stylesheet.css';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  initSentry();
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Providers>
        <CSSreset />
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </Providers>
    );
  }
}

export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(MyApp)
  : MyApp;
