import { Box, Text, Stack, Flex, css, Grid } from '@storyofams/react-ui';
import {
  Image as ToolkitImage,
  withStory,
  WithStoryProps,
} from '@storyofams/storyblok-toolkit';
import { format } from 'date-fns';
import { GetStaticProps } from 'next';
import NextLink from 'next/link';

import { Seo, Layout, HeaderSimple, Container, Heading } from '~components';
import { enhancedStaticProps } from '~lib';

import {
  FooterComponent,
  NavigationComponent,
  BlogpostItems,
} from '../../graphql/sdk';

export interface BlogProps extends WithStoryProps {
  footer: FooterComponent;
  navigation: NavigationComponent;
  blogItems?: BlogpostItems;
}

const Blog = ({ blogItems, story, footer, navigation }: BlogProps) => {
  console.log(blogItems);
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
          navBackground: true,
        }}
      >
        {story?.content?.title && (
          <HeaderSimple
            first
            content={{
              title: story?.content?.title,
              description: story?.content?.subtitle,
            }}
          />
        )}
        <Container>
          {!!story?.content?.featured_post && (
            <NextLink
              href={`/blog/${story?.content?.featured_post?.slug}`}
              passHref
            >
              <Flex
                borderRadius="md"
                boxShadow="sm"
                width="100%"
                flexDirection={['column', 'column', 'row']}
                minHeight={[0, 0, '424px']}
                as="a"
              >
                <Box
                  width={['100%', '100%', '50%']}
                  height={['280px', '280px', 'auto']}
                  css={css({
                    '> div': {
                      height: '100%',
                    },
                    img: {
                      borderTopLeftRadius: ['none', 'none', 'sm'],
                      borderBottomLeftRadius: ['none', 'none', 'sm'],
                      borderTopRightRadius: ['sm', 'sm', 'none'],
                      height: '100%',
                      width: '100%',
                      maxWidth: '100%',
                    },
                  })}
                >
                  <ToolkitImage
                    alt={
                      story?.content?.featured_post?.content?.thumbnail?.alt ||
                      ''
                    }
                    src={
                      story?.content?.featured_post?.content?.thumbnail
                        ?.filename
                    }
                    fluid={720}
                    fit="cover"
                    showPlaceholder={false}
                  />
                </Box>
                <Stack
                  textAlign="left"
                  flex="1"
                  flexDirection="column"
                  space={2}
                  p={[3, 8]}
                >
                  <Heading variant="h3" as="h3">
                    {story?.content?.featured_post?.content?.title}
                  </Heading>
                  {story?.content?.featured_post?.content?.synopsis && (
                    <Text>
                      {story?.content?.featured_post?.content?.synopsis}
                    </Text>
                  )}
                  <Flex flex="1" />
                  <Text>
                    {format(
                      new Date(story?.content?.featured_post?.firstPublishedAt),
                      'dd MMM',
                    )}
                    {story?.content?.featured_post?.content?.read_duration &&
                      ` • ${story?.content?.featured_post?.content?.read_duration} min read`}
                  </Text>
                </Stack>
              </Flex>
            </NextLink>
          )}
          {!!blogItems?.items && (
            <Grid width="100%" rowSize={[1, 2]} rowGap={3} columnGap={3}>
              {blogItems?.items?.map(
                ({ content, slug, first_published_at }) => (
                  <Box>
                    <NextLink href={`/blog/${slug}`} passHref>
                      <Flex
                        borderRadius="md"
                        boxShadow="sm"
                        width="100%"
                        flexDirection="column"
                        as="a"
                      >
                        <Box
                          width="100%"
                          height="280px"
                          css={css({
                            '> div': {
                              height: '100%',
                            },
                            img: {
                              borderTopLeftRadius: 'sm',
                              borderTopRightRadius: 'sm',
                              height: '100%',
                              width: '100%',
                              maxWidth: '100%',
                            },
                          })}
                        >
                          <ToolkitImage
                            alt={content?.thumbnail?.alt || ''}
                            src={content?.thumbnail?.filename}
                            fluid={720}
                            fit="cover"
                            showPlaceholder={false}
                          />
                        </Box>
                        <Stack
                          textAlign="left"
                          width="100%"
                          flexDirection="column"
                          space={2}
                          p={[3, 4]}
                        >
                          <Heading variant="h3" as="h3">
                            {content?.title}
                          </Heading>
                          <Text>
                            {format(new Date(first_published_at), 'dd MMM')}
                            {content?.read_duration &&
                              ` • ${content?.read_duration} min read`}
                          </Text>
                        </Stack>
                      </Flex>
                    </NextLink>
                  </Box>
                ),
              )}
            </Grid>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default withStory(Blog);

export const getStaticProps: GetStaticProps = enhancedStaticProps(
  async ({ sdk }) => {
    let story;
    let blogItems;
    let notFound = false;

    try {
      story = (await sdk.blogOverviewItem({ slug: 'blog' })).BlogoverviewItem;
    } catch (e) {
      notFound = true;
    }

    if (story?.content?.featured_post?.id) {
      try {
        blogItems = (
          await sdk.blogPostItems({
            filterId: String(story?.content?.featured_post?.id),
          })
        ).BlogpostItems;
      } catch (e) {
        notFound = true;
      }
    } else {
      try {
        blogItems = (
          await sdk.blogPostItems({
            filterId: '',
          })
        ).BlogpostItems;
      } catch (e) {
        notFound = true;
      }
    }

    return {
      props: {
        story,
        blogItems,
      },
      notFound: notFound || !story,
      revalidate: 60,
    };
  },
);
