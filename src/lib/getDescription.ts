import { getExcerpt } from '@storyofams/storyblok-toolkit';

export const getDescription = (contentOfStory: any) => {
  if (!contentOfStory) {
    return '';
  }

  if (contentOfStory?.seo?.description) {
    return contentOfStory?.seo?.description;
  }

  return getExcerpt(contentOfStory?.text);
};
