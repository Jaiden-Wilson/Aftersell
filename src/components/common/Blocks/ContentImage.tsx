import { Box, css } from '@storyofams/react-ui';
import { Image as ToolkitImage } from '@storyofams/storyblok-toolkit';

export const ContentImage = ({ content, ...props }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      width="100%"
      maxWidth="960px"
      mx="auto"
      css={css({
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
      <ToolkitImage
        alt={content?.alt || ''}
        src={content?.filename}
        fluid={1400}
        fit="contain"
      />
    </Box>
  );
};
