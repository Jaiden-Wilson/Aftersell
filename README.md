<p align="center">
  <a aria-label="Story of AMS logo" href="https://storyofams.com/" target="_blank" align="center">
    <img src="https://storyofams.com/public/story-of-ams-logo-small@3x.png" alt="Story of AMS" width="120">
  </a>
  <h1 align="center">Perfect Product Finder</h1>
</p>

## Whats included?

- Project structure with linting, husky, typescript, storybook, sentry, fontfaceobserver, sitemaphandler and more.
- UI library for the most commonly used components
- Helper library for most commonly used hooks and helpers
- Styling with a theme file and css normalizer

## The CSS function

Sometimes you need to only add props from the theme, in those cases its often easier to use the `css` utility:

```js
import styled from 'styled-components'
import css from '@styled-system/css'

const Button = styled.button(css({
  color: 'grey400',
  borderRadius: 'sm',
  p: [1,2,3], // can take responsive arrays just like styled-system
  d: 'inline-flex'
}))
```

This will automatically create a styled component that takes its properties from the theme.

## File structure

```md
|- src
  |- components
    |- common // for all shared components
      |- List
        |- list.test.tsx
        |- list.stories.tsx
        |- index.tsx // actual component lives here
    |- landing // components specific to the landing page
  |- config
  |- hooks
  |- lib // utils, helpers, etc
  |- pages
  |- styles
```

## SEO

Uses [next-seo](https://github.com/garmeeh/next-seo). Utilizes a default config to get up and running quickly (see `src/config`).

Always include a `<NextSeo />` tag with minimal information included on page level.

## Crash feedback

This project comes out of the box with a sample implementation of [Sentry](https://sentry.io/welcome/) (including sourcemaps).

You can enable the implementation by setting the keys you've generated as environment variables in your application.

To get it fully operational requires:

- generating keys in sentry
- setting up environment variables

The following keys are needed for the sample implementation:

```md
- NEXT_IS_SERVER
- NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR (Used to improve readability of the framepaths in the sourcemaps)
- NODE_ENV (Sentry is only enabled when the `NODE_ENV` is production)
- NEXT_PUBLIC_SENTRY_DSN (The DSN tells the SDK where to send the events)
- NEXT_PUBLIC_COMMIT_SHA (Sets the release)
```

To be able to upload the sourcemaps, you will need to add the following keys

```md
- SENTRY_ORG
- SENTRY_PROJECT
- SENTRY_AUTH_TOKEN
```

When all the Sentry configuration env variables are set, the Sentry webpack plugin gets pushed to the webpack plugins, to build and upload the source maps to sentry.

This is an alternative to manually uploading the source maps and is disabled in development mode.

## Missing something?

[Open an issue](https://github.com/storyofams/next-boilerplate/issues/new/choose) with your proposed change.

## Wanna help out?

See [contributing.md](https://github.com/storyofams/next-boilerplate/blob/master/.github/CONTRIBUTING.md) to see how you can get started.
