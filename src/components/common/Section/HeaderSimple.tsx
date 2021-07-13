import { SystemProps, Icon } from '@storyofams/react-ui';
import css from '@styled-system/css';
import { Fade } from 'react-awesome-reveal';

import { Title, RichText } from '../Blocks';
import { Arrow } from '../Icon/library';
import { Link } from '../Link';
import { Container } from './Container';

type HeaderSimpleProps = {
  first?: boolean;
  content: {
    title?: any;
    description?: any;
    overlap_next_section?: boolean;
  };
  blogPost?: boolean;
} & SystemProps;

export const HeaderSimple = ({
  content,
  first,
  blogPost,
  ...props
}: HeaderSimpleProps) => {
  return (
    <Container
      background="gradient"
      pt={10}
      pb={[4, 10]}
      childProps={{
        pt: [4, blogPost && !content?.overlap_next_section ? 6 : 10],
        pb: [4, blogPost && !content?.overlap_next_section ? 0 : 10],
        alignItems: blogPost ? 'flex-start' : 'center',
        textAlign: blogPost ? 'left' : 'center',
      }}
      mb={content?.overlap_next_section && ['-64px', '-160px']}
      space={blogPost ? 2 : [3, 5]}
      {...props}
    >
      {blogPost && (
        <Fade duration={640} direction="up" triggerOnce>
          <Link
            stylingProps={{
              fontSize: 2.5,
              fontWeight: 'extraBold',
              css: css({
                a: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              }),
            }}
            href="/blog"
          >
            <Icon icon={Arrow} width="25px" mr={1.5} />
            Insights
          </Link>
        </Fade>
      )}
      {!!content?.title && (
        <Fade
          delay={blogPost ? 0 : 128}
          duration={640}
          direction="up"
          triggerOnce
        >
          <Title text={content?.title} h1={first} />
        </Fade>
      )}
      {!!content?.description?.content?.[0].content && (
        <Fade delay={128} duration={640} direction="up" triggerOnce>
          <RichText text={content?.description} />
        </Fade>
      )}
    </Container>
  );
};
