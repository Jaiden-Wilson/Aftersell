import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#6138fe"
          />
          <meta name="msapplication-TileColor" content="#6138fe" />
          <meta name="theme-color" content="#fefefe" />
          <meta
            name="apple-mobile-web-app-title"
            content="Perfect Product Finder"
          />
          <meta name="application-name" content="Perfect Product Finder" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />

          <link rel="preconnect" href="https://img2.storyblok.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://img2.storyblok.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />

          <link
            rel="preload"
            href="/static/fonts/Aeonik-Black.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/static/fonts/Aeonik-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/static/fonts/Aeonik-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/static/fonts/Aeonik-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />

          <style
            dangerouslySetInnerHTML={{
              __html: `
            @font-face {
              font-family: 'Aeonik';
              src: url('/static/fonts/Aeonik-Black.woff2') format('woff2'),
                  url('/static/fonts/Aeonik-Black.woff') format('woff');
              font-weight: 900;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
                font-family: 'Aeonik';
                src: url('/static/fonts/Aeonik-Regular.woff2') format('woff2'),
                    url('/static/fonts/Aeonik-Regular.woff') format('woff');
                font-weight: normal;
                font-style: normal;
                font-display: swap;
            }

            @font-face {
                font-family: 'Aeonik';
                src: url('/static/fonts/Aeonik-Light.woff2') format('woff2'),
                    url('/static/fonts/Aeonik-Light.woff') format('woff');
                font-weight: 300;
                font-style: normal;
                font-display: swap;
            }

            @font-face {
                font-family: 'Aeonik';
                src: url('/static/fonts/Aeonik-Medium.woff2') format('woff2'),
                    url('/static/fonts/Aeonik-Medium.woff') format('woff');
                font-weight: 500;
                font-style: normal;
                font-display: swap;
            }

            @font-face {
                font-family: 'Aeonik';
                src: url('/static/fonts/Aeonik-Bold.woff2') format('woff2'),
                    url('/static/fonts/Aeonik-Bold.woff') format('woff');
                font-weight: bold;
                font-style: normal;
                font-display: swap;
            }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
