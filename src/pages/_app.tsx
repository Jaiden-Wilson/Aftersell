import { withPasswordProtect } from '@storyofams/next-password-protect';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';

import { Providers } from '~components';
import { seo } from '~config';
import CSSreset from '~styles/CSSreset';

import 'swiper/swiper.min.css';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  import('~lib/sentry').then((m) => m.initSentry());
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
