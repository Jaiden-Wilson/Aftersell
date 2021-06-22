import { nextPreviewHandlers } from '@storyofams/storyblok-toolkit';

export default nextPreviewHandlers({
  disableStoryCheck: true,
  previewToken: process.env.PREVIEW_TOKEN,
  storyblokToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
});
