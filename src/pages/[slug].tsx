import { withStory, WithStoryProps } from '@storyofams/storyblok-toolkit';
import { GetStaticPaths, GetStaticProps } from 'next';
import { DynamicPage } from '~components';
import { enhancedStaticProps, sdk as sdkClient } from '~lib';
import { FooterComponent, NavigationComponent } from '../graphql/sdk';

export interface PageProps extends WithStoryProps {
  footer: FooterComponent;
  navigation: NavigationComponent;
}

const Page = ({ ...props }: PageProps) => <DynamicPage {...props} />;

export default withStory(Page);

export const getStaticProps: GetStaticProps = enhancedStaticProps(
  async ({ params: { slug }, sdk }) => {
    let story;
    let notFound = false;

    try {
      story = (await sdk.pageItem({ slug: `${slug}` })).PageItem;
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
    stories = (await sdkClient.pageItems()).PageItems.items;
  } catch (e) {}

  return {
    paths: [stories
      ?.filter(({ slug }) => slug !== 'home')
      ?.map(({ slug }) => ({
        params: { slug },
      }))],
    fallback: 'blocking',
  };
};
