import { WithStoryProps } from '@storyofams/storyblok-toolkit';

import { Seo, Section, Layout, Heading } from '~components';

import { FooterComponent, NavigationComponent } from '../../graphql/sdk';
import { Container } from './Section/Container';

export interface DynamicPageProps extends WithStoryProps {
  footer: FooterComponent;
  navigation: NavigationComponent;
  story: any;
  blogPost?: boolean;
}

export const DynamicPage = ({
  story,
  footer,
  navigation,
  blogPost,
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
        {story?.content?.body?.[0]?.component ? (
          story?.content?.body?.map((section, i) => (
            <Section
              sectionType={section?.component}
              content={section}
              first={i === 0}
              last={story?.content?.body?.length - 1 === i}
              key={`section-${i}`}
              noBgAnimation={story?.content?.body[0]?.overlap_next_section}
              blogPost={blogPost}
            />
          ))
        ) : (
          <Container
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt={6}
            textAlign="center"
            minHeight="100vh"
          >
            <Heading as="h1" variant="h1">
              Let the story unfold!
            </Heading>
          </Container>
        )}
      </Layout>
    </>
  );
};
