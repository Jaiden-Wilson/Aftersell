import { Box, css } from '@storyofams/react-ui';
import { Image as ToolkitImage } from '@storyofams/storyblok-toolkit';
import styled from 'styled-components';

const Wrapper = styled(Box)`
  > div {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;

export const ContentImage = ({ content, ...props }) => {
  return (
    <Wrapper
      position="relative"
      overflow="hidden"
      maxWidth="100%"
      width="100%"
      css={css({
        img: {
          borderRadius: ['8px', '32px'],
        },
      })}
      {...props}
    >
      <ToolkitImage
        alt={content?.alt || ''}
        src={content?.filename}
        fluid={700}
      />
    </Wrapper>
  );
};
