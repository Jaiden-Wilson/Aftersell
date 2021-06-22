const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const SentryWebpackPlugin = require('@sentry/webpack-plugin');
// const withOffline = require('next-offline')
// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
const withSourceMaps = require('@zeit/next-source-maps');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

// Use the SentryWebpack plugin to upload the source maps during build step
const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
  CI_COMMIT_SHA,
  PRODUCTION,
} = process.env;

process.env.SENTRY_DSN = SENTRY_DSN;
const basePath = '';

module.exports = withBundleAnalyzer(
  withSourceMaps({
    env: {
      // Make the COMMIT_SHA available to the client so that Sentry events can be
      // marked for the release they belong to. It may be undefined if running
      // outside of Vercel
      NEXT_PUBLIC_COMMIT_SHA: CI_COMMIT_SHA,
      ENVIRONMENT: process.env.ENVIRONMENT,
      PASSWORD_PROTECT:
        process.env.ENVIRONMENT === 'staging' ||
        process.env.ENVIRONMENT === 'production',
    },
    future: {
      webpack5: true,
    },
    webpack(config, options) {
      config.resolve.plugins = [
        new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
      ];

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          { loader: '@svgr/webpack', options: { icon: true, svgo: false } },
        ],
      });

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          { loader: '@svgr/webpack', options: { icon: true, svgo: false } },
        ],
      });

      // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
      // @sentry/node will run in a Node.js environment. @sentry/node will use
      // Node.js-only APIs to catch even more unhandled exceptions.
      //
      // This works well when Next.js is SSRing your page on a server with
      // Node.js, but it is not what we want when your client-side bundle is being
      // executed by a browser.
      //
      // Luckily, Next.js will call this webpack function twice, once for the
      // server and once for the client. Read more:
      // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
      //
      // So ask Webpack to replace @sentry/node imports with @sentry/browser when
      // building the browser's bundle
      if (!options.isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
      }

      // Define an environment variable so source code can check whether or not
      // it's running on the server so we can correctly initialize Sentry
      config.plugins.push(
        new options.webpack.DefinePlugin({
          'process.env.NEXT_IS_SERVER': JSON.stringify(
            options.isServer.toString(),
          ),
        }),
      );

      // When all the Sentry configuration env variables are available/configured
      // The Sentry webpack plugin gets pushed to the webpack plugins to build
      // and upload the source maps to sentry.
      // This is an alternative to manually uploading the source maps
      // Note: This is disabled in development mode.
      if (
        SENTRY_DSN &&
        SENTRY_ORG &&
        SENTRY_PROJECT &&
        SENTRY_AUTH_TOKEN &&
        CI_COMMIT_SHA &&
        NODE_ENV === 'production' &&
        PRODUCTION
      ) {
        config.plugins.push(
          new SentryWebpackPlugin({
            include: '.next',
            ignore: ['node_modules'],
            stripPrefix: ['webpack://_N_E/'],
            urlPrefix: `~${basePath}/_next`,
            release: CI_COMMIT_SHA,
          }),
        );
      }

      config.module.rules.push({
        test: path.resolve(
          __dirname,
          'node_modules/graphql-request/node_modules/cross-fetch/dist/browser-ponyfill.js',
        ),
        use: 'null-loader',
      });

      return config;
    },
    basePath,
    async redirects() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
          permanent: true,
        },
      ];
    },
  }),
);
