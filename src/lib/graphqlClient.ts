import {
  getClient,
  getStaticPropsWithSdk,
} from '@storyofams/storyblok-toolkit';
import { getSdk } from '~/graphql/sdk';

const client = getClient({
  version:
    process.env.ENVIRONMENT === 'staging' ||
    process.env.NODE_ENV === 'development'
      ? 'draft'
      : 'published',
  token: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  additionalOptions: { fetch },
});

export const sdk = getSdk(client);

export const staticPropsWithSdk = getStaticPropsWithSdk(getSdk, client);
