import { withStory, WithStoryProps } from '@storyofams/storyblok-toolkit';
import { GetStaticPaths, GetStaticProps } from 'next';
import { DynamicPage } from '~components';
import { enhancedStaticProps, sdk as sdkClient } from '~lib';
import { FooterComponent, NavigationComponent } from '../../graphql/sdk';

export interface BlogPostProps extends WithStoryProps {
  footer: FooterComponent;
  navigation: NavigationComponent;
}

const BlogPost = ({ ...props }: BlogPostProps) => (
  <DynamicPage blogPost {...props} />
);

export default withStory(BlogPost);

export const getStaticProps: GetStaticProps = enhancedStaticProps(
  async ({ params: { slug }, sdk }) => {
    let story;
    let notFound = false;

    try {
      story = (await sdk.blogPostItem({ slug: `/blog/${slug}` })).BlogpostItem;
    } catch (e) {
      notFound = true;
    }

    return {
      props: {
        story,
      },
      notFound: notFound || !story,
      revalidate: 60,
    };
  },
);

export const getStaticPaths: GetStaticPaths = async () => {
  let stories;

  try {
    stories = (await sdkClient.blogPostItems()).BlogpostItems.items;
  } catch (e) {}

  return {
    paths: stories?.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  };
};
