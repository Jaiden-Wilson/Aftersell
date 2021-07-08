import { Box, css } from '@storyofams/react-ui';
import { Image as ToolkitImage } from '@storyofams/storyblok-toolkit';
import { Parallax } from 'react-scroll-parallax';

export const ContentImageDual = ({ content, ...props }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      width="100%"
      maxWidth="960px"
      height={[200, 440]}
      mx="auto"
      css={css({
        '> div > div > div > div': {
          width: '100%',
        },
        '> div > div > div': {
          width: '100%',
        },
        img: {
          width: '100%',
          maxWidth: '100%',
        },
      })}
      {...props}
    >
      <Parallax
        y={['0px', '12px']}
        x={['0px', '-24px']}
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
          right="0"
          bottom="0"
          height={[200, 440]}
          css={css({
            '.storyblok-image-wrapper': {
              width: '80%',
              height: '100%',
            },
            img: {
              objectPosition: 'right bottom !important',
            },
          })}
        >
          <ToolkitImage
            alt={content?.image_2?.alt || ''}
            src={content?.image_2?.filename}
            fluid={1400}
            width="100%"
            fit="contain"
            showPlaceholder={false}
          />
        </Box>
      </Parallax>
      <Parallax
        y={['0px', '24px']}
        x={['0px', '24px']}
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
          left="0"
          bottom="0"
          height={[160, 368]}
          css={css({
            '> div': {
              width: '100%',
            },
            '.storyblok-image-wrapper': {
              width: '50%',
              height: '100%',
            },
            img: {
              objectPosition: 'left bottom !important',
            },
          })}
        >
          <ToolkitImage
            alt={content?.image_1?.alt || ''}
            src={content?.image_1?.filename}
            fluid={1400}
            width="100%"
            fit="contain"
            showPlaceholder={false}
          />
        </Box>
      </Parallax>
    </Box>
  );
};
