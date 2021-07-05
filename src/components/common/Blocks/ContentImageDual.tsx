import { Box, css } from '@storyofams/react-ui';
import { Image as ToolkitImage } from '@storyofams/storyblok-toolkit';

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
        '> div > div': {
          width: '100%',
        },
        '> div': {
          width: '100%',
        },
        img: {
          width: '100%',
          maxWidth: '100%',
        },
      })}
      {...props}
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
        />
      </Box>
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
        />
      </Box>
    </Box>
  );
};
