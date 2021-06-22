import { useState } from 'react';
import { Icon, Box } from '@storyofams/react-ui';
import { m } from 'framer-motion';
import dynamic from 'next/dynamic';
import { transparentize } from 'polished';
import styled from 'styled-components';

import { ContentImage } from '~components';
import { Play } from '~components/common/Icon/library';
import { useCursor } from '../Cursor';

import type { Player as PlayerType } from './Player';
import type { Preview as PreviewType } from './Preview';

const Player = dynamic(() =>
  import('./Player').then((m) => m.Player),
) as typeof PlayerType;
const Preview = dynamic(() =>
  import('./Preview').then((m) => m.Preview),
) as typeof PreviewType;

const VideoWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 0;
  padding: 56.25% 0 0 0;
  border-radius: 32px;
  overflow: hidden;
  z-index: 1;
  background-color: ${(p) => p.theme.colors.primary200};

  video {
    height: auto !important;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    border-radius: 0;

    iframe,
    > div {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: ${(p) => p.theme.breakpoints.maxSm}) {
    height: auto;

    iframe {
      height: auto;
      width: 100%;
    }
  }
`;

const PlayButtonOuter = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  border-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  cursor: pointer;

  &:hover > div {
    &::before {
      opacity: 1;
      transform: scale(1.2, 1.2);
    }
    &::after {
      opacity: 0;
      transform: scale(0.5, 0.5);
    }
  }
`;

const PlayButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  width: 88px;
  border-radius: 50%;
  transition: all 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-radius: 50%;
    border: 1px solid ${(p) => transparentize(0.5, '#F4F2FB')};
    background: ${(p) => transparentize(0.5, '#F4F2FB')};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 1;
    transition: all 0.3s;
    border-radius: 50%;
    background: ${(p) => transparentize(0.6, p.theme.colors.white)};
    transform: scale(1, 1);
  }

  svg {
    z-index: 2;
    transform: translateX(3px);
  }
`;

export const Video = ({ src, previewVideo, previewImage, ...props }) => {
  const { zoom, reset } = useCursor();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Box width="100%" {...props}>
        <m.div
          onHoverStart={() => {
            zoom();
          }}
          onHoverEnd={() => {
            reset();
          }}
        >
          <VideoWrapper>
            {!previewImage?.filename && previewVideo?.filename && (
              <Preview previewVideo={previewVideo} isOpen={isOpen} />
            )}
            {previewImage?.filename && <ContentImage content={previewImage} />}
            {src && (
              <PlayButtonOuter
                onClick={() => {
                  setOpen(true);
                }}
                aria-label="Play showreel"
              >
                <PlayButton>
                  <Icon icon={<Play />} color="white" fontSize={7} />
                </PlayButton>
              </PlayButtonOuter>
            )}
          </VideoWrapper>
        </m.div>
      </Box>
      {isOpen && <Player setOpen={setOpen} src={src} />}
    </>
  );
};
