import { withStory, WithStoryProps } from '@storyofams/storyblok-toolkit';
import { GetStaticProps } from 'next';
import { DynamicPage } from '~components';
import { enhancedStaticProps } from '~lib';
import { FooterComponent, NavigationComponent } from '../../graphql/sdk';

export interface BlogProps extends WithStoryProps {
  footer: FooterComponent;
  navigation: NavigationComponent;
}

const Blog = ({ ...props }: BlogProps) => <DynamicPage {...props} />;

export default withStory(Blog);

export const getStaticProps: GetStaticProps = enhancedStaticProps(
  async ({ sdk }) => {
    let story;
    let notFound = false;

    try {
      story = (await sdk.pageItem({ slug: 'blog' })).PageItem;
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
