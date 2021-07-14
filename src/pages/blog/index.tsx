import { ReactNode } from 'react';
import {
  SystemProps,
  Box,
  Text,
  Stack,
  Flex,
  css,
  Grid,
} from '@storyofams/react-ui';
import {
  Image as ToolkitImage,
  withStory,
  WithStoryProps,
} from '@storyofams/storyblok-toolkit';
import { format } from 'date-fns';
import { m } from 'framer-motion';
import { GetStaticProps } from 'next';
import NextLink from 'next/link';

import {
  Seo,
  Layout,
  HeaderSimple,
  Container,
  Heading,
  Newsletter,
} from '~components';
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

const MotionBox = m(Flex);

export const ScaleOnHover = ({ children }: { children: ReactNode }) => (
  <MotionBox
    width="100%"
    height="100%"
    variants={{
      initial: {
        scale: 1,
      },
      hover: { scale: 1.06 },
    }}
    transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.56 }}
  >
    {children}
  </MotionBox>
);

const Blog = ({ blogItems, story, footer, navigation }: BlogProps) => {
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
              overlap_next_section: true,
            }}
          />
        )}
        <Container mb={[4, 10]}>
          {!!story?.content?.featured_post && (
            <NextLink
              href={`/blog/${story?.content?.featured_post?.slug}`}
              passHref
            >
              <MotionBox
                borderRadius="md"
                boxShadow="sm"
                width="100%"
                flexDirection={['column', 'column', 'row']}
                minHeight={[0, 0, '424px']}
                bg="white"
                overflow="hidden"
                whileHover="hover"
                // @ts-ignore
                as="a"
              >
                <Box
                  width={['100%', '100%', '50%']}
                  height={['280px', '280px', 'auto']}
                  overflow="hidden"
                  css={css({
                    '> div, > div > div': {
                      height: '100%',
                      width: '100%',
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
                  <ScaleOnHover>
                    <ToolkitImage
                      alt={
                        story?.content?.featured_post?.content?.thumbnail
                          ?.alt || ''
                      }
                      src={
                        story?.content?.featured_post?.content?.thumbnail
                          ?.filename
                      }
                      fluid={800}
                      fit="cover"
                      showPlaceholder={false}
                    />
                  </ScaleOnHover>
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
                    {story?.content?.featured_post?.firstPublishedAt &&
                      format(
                        new Date(
                          story?.content?.featured_post?.firstPublishedAt,
                        ),
                        'dd MMM',
                      )}
                    {story?.content?.featured_post?.content?.read_duration &&
                      ` • ${story?.content?.featured_post?.content?.read_duration} min read`}
                  </Text>
                </Stack>
              </MotionBox>
            </NextLink>
          )}
          {!!story?.content?.newsletter?.content && (
            <Newsletter content={story?.content?.newsletter?.content} />
          )}
          {!!blogItems?.items && (
            <Grid
              width="100%"
              rowSize={[1, 2]}
              rowGap={3}
              columnGap={3}
              mb={!!!story?.content?.newsletter?.content && [4, 10]}
            >
              {blogItems?.items?.map(
                ({ content, slug, first_published_at, uuid }) => (
                  <Box key={uuid}>
                    <NextLink href={`/blog/${slug}`} passHref>
                      <MotionBox
                        borderRadius="md"
                        boxShadow="sm"
                        width="100%"
                        flexDirection="column"
                        bg="white"
                        overflow="hidden"
                        transition="transform 0.18s ease-in-out"
                        whileHover="hover"
                        // @ts-ignore
                        as="a"
                      >
                        <Box
                          width="100%"
                          height="280px"
                          overflow="hidden"
                          css={css({
                            '> div, > div > div': {
                              height: '100%',
                              width: '100%',
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
                          <ScaleOnHover>
                            <ToolkitImage
                              alt={content?.thumbnail?.alt || ''}
                              src={content?.thumbnail?.filename}
                              fluid={800}
                              fit="cover"
                              showPlaceholder={false}
                            />
                          </ScaleOnHover>
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
                            {first_published_at &&
                              format(new Date(first_published_at), 'dd MMM')}
                            {content?.read_duration &&
                              ` • ${content?.read_duration} min read`}
                          </Text>
                        </Stack>
                      </MotionBox>
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
