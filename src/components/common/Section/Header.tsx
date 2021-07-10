import { css, Box, Stack, SystemProps } from '@storyofams/react-ui';
import { Image as ToolkitImage } from '@storyofams/storyblok-toolkit';
import { Fade } from 'react-awesome-reveal';
import { Parallax } from 'react-scroll-parallax';

import { getLinkProps } from '~lib';
import { Background } from '~components/common/Icon/library';

import { Title, RichText } from '../Blocks';
import { Button } from '../Button';
import { Shape } from '../Shape';
import { Container } from './Container';

type HeaderProps = {
  first?: boolean;
  content: {
    title?: any;
    description?: any;
    button_1_label?: string;
    button_1_url?: any;
    button_2_label?: string;
    button_2_url?: any;
    image_1?: any;
    image_2?: any;
  };
} & SystemProps;

export const Header = ({ content, first, ...props }: HeaderProps) => {
  return (
    <Container
      pt={[10]}
      pb={[4, 10]}
      childProps={{
        pt: [0, 0, 10],
        pb: [4, 10],
        flexDirection: ['column-reverse', 'column-reverse', 'row'],
        position: 'relative',
      }}
      textAlign="left"
      {...props}
    >
      <Fade
        duration={1200}
        fraction={0.3}
        triggerOnce
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
        }}
      >
        <Parallax
          x={['-40px', '0px']}
          styleOuter={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
          }}
          styleInner={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
          }}
        >
          <Shape
            position="absolute"
            left="50%"
            top={0}
            bottom={0}
            width="100vw"
            transform="translateX(-50%)"
            icon={<Background />}
            zIndex="-1"
          />
        </Parallax>
      </Fade>

      <Stack
        width={['100%', '100%', '54%']}
        flexDirection="column"
        space={[2, 3]}
      >
        <Fade cascade damping={0.2} duration={640} direction="up" triggerOnce>
          {!!content?.title && <Title text={content?.title} h1={first} />}
          {!!content?.description?.content?.[0].content && (
            <RichText text={content?.description} />
          )}
          {(content?.button_1_label || content?.button_2_label) && (
            <Stack alignItems="center" space={2}>
              {content?.button_1_label && (
                <Button
                  variant="outline"
                  to={getLinkProps(content?.button_1_url)}
                  px={[2, 2, 4]}
                  py={[1, 1, 1.5]}
                >
                  {content?.button_1_label}
                </Button>
              )}
              {content?.button_2_label && (
                <Button
                  variant="primary"
                  to={getLinkProps(content?.button_2_url)}
                  px={[2, 2, 4]}
                  py={[1, 1, 1.5]}
                >
                  {content?.button_2_label}
                </Button>
              )}
            </Stack>
          )}
        </Fade>
      </Stack>
      <Box
        width={['calc(100% - 96px)', 'calc(100% - 96px)', '46%']}
        pt={['calc(100% - 96px)', 'calc(100% - 96px)', '46%']}
        position="relative"
      >
        <Box
          position="absolute"
          left="0"
          top="0"
          width="100%"
          pt="100%"
          borderRadius={['40px', '96px']}
          css={css({
            background: 'linear-gradient(180deg, #6138FE 0%, #F087B3 100%)',
          })}
          overflow="hidden"
        >
          <Parallax
            y={['0px', '40px']}
            x={['80px', '-80px']}
            styleOuter={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
            }}
            styleInner={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              position="absolute"
              top="20%"
              left="48%"
              width="160%"
              pt="160%"
              borderRadius="full"
              css={css({
                background: 'linear-gradient(180deg, #6138FE 0%, #F087B3 100%)',
              })}
            />
          </Parallax>
        </Box>
        <Fade
          duration={480}
          delay={560}
          triggerOnce
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
          }}
        >
          <Parallax
            y={['0px', '40px']}
            styleOuter={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
            }}
            styleInner={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              position="absolute"
              right={['-48px', '-48px', '-16%']}
              top={['-20%', '-12%', '-10%']}
              width={['100%', '100%', '100%']}
              maxWidth="560px"
              css={css({
                '> div': {
                  width: '100%',
                },
                '.storyblok-image-wrapper': {
                  width: '100%',
                  height: '100%',
                },
                img: {
                  objectPosition: 'right top !important',
                },
              })}
            >
              <ToolkitImage
                alt={content?.image_1?.alt || ''}
                src={content?.image_1?.filename}
                fluid={700}
                width="100%"
                fit="contain"
                showPlaceholder={false}
              />
            </Box>
          </Parallax>
        </Fade>
        <Fade
          duration={480}
          delay={640}
          triggerOnce
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
          }}
        >
          <Parallax
            y={['20px', '-20px']}
            x={['-12px', '12px']}
            styleOuter={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
            }}
            styleInner={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              position="absolute"
              left={['-48px', '-48px', '-2%']}
              bottom={['-6%', '-6%', '-16%']}
              width={['80%', '80%', '100%']}
              maxWidth="560px"
              css={css({
                '.storyblok-image-wrapper': {
                  width: '100%',
                  height: '100%',
                },
                img: {
                  objectPosition: 'left bottom !important',
                },
              })}
            >
              <ToolkitImage
                alt={content?.image_2?.alt || ''}
                src={content?.image_2?.filename}
                fluid={700}
                width="100%"
                fit="contain"
                showPlaceholder={false}
              />
            </Box>
          </Parallax>
        </Fade>
      </Box>
    </Container>
  );
};
