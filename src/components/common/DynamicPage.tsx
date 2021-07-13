import { WithStoryProps } from '@storyofams/storyblok-toolkit';

import { Seo, Section, Layout } from '~components';

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
      <Seo
        story={story}
        title={story?.content?.seo?.title}
        description={story?.content?.seo?.description}
      />
      <Layout
        footer={footer}
        navigation={{
          ...navigation,
          navBackground:
            story?.content?.body?.[0]?.component === 'header_simple',
        }}
      >
        {story?.content?.body.map((section, i) => (
          <Section
            sectionType={section?.component}
            content={section}
            first={!!(i === 0)}
            key={`section-${i}`}
            noBgAnimation={story?.content?.body[0]?.overlap_next_section}
          />
        ))}
      </Layout>
    </>
  );
};
