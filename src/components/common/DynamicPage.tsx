import { WithStoryProps } from '@storyofams/storyblok-toolkit';
import { NextSeo } from 'next-seo';
import { Section, Layout } from '~components';
import { FooterComponent, NavigationComponent } from '../../graphql/sdk';

export interface DynamicPageProps extends WithStoryProps {
  footer: FooterComponent;
  navigation: NavigationComponent;
  story: any;
}

export const DynamicPage = ({
  story,
  footer,
  navigation,
}: DynamicPageProps) => {
  return (
    <>
      <NextSeo
        {...story?.content?.seo}
        title={story?.content?.seo?.title || 'Perfect Product Finder'}
        description={
          story?.content?.seo?.description ||
          'Use the Perfect Product Finder to...'
        }
      />
      <Layout footer={footer} navigation={navigation}>
        {story?.content?.body.map((section, i) => (
          <Section
            sectionType={section.component}
            content={section}
            first={!!(i === 0)}
            key={`section-${i}`}
          />
        ))}
      </Layout>
    </>
  );
};
