import { Box, css } from '@storyofams/react-ui';
import { Image as ToolkitImage } from '@storyofams/storyblok-toolkit';

export const ContentImage = ({ content, ...props }) => {
  console.log(content);
  return (
    <Box
      position="relative"
      overflow="hidden"
      width="100%"
      maxWidth={content?.size ? '100%' : '960px'}
      mx="auto"
      boxShadow={content?.rounded_corners ? 'xs' : 'none'}
      borderRadius={content?.rounded_corners ? 'md' : 'none'}
      css={css({
        '> div': {
          width: '100%',
        },
        img: {
          width: '100%',
          maxWidth: '100%',
          borderRadius: content?.rounded_corners ? 'md' : 'none',
        },
      })}
      {...props}
    >
      <ToolkitImage
        alt={content?.alt || ''}
        src={content?.filename}
        fluid={content?.size ? 1600 : 1200}
        fit="contain"
        showPlaceholder={false}
      />
    </Box>
  );
};
