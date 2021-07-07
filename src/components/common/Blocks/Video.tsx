import { useState } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { Box, Icon } from '@storyofams/react-ui';
import Vimeo from '@u-wave/react-vimeo';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

import '@reach/dialog/styles.css';

import { Play } from '~components/common/Icon/library';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 56.25% 0 0 0;
  background: ${(p) => p.theme.colors.grey100};
  border-radius: 16px;
  box-shadow: ${(p) => p.theme.shadows.xs};

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    iframe {
      border-radius: 16px;
      width: 100%;
    }
  }

  @media (max-width: ${(p) => p.theme.breakpoints.maxXs}) {
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
  border: none;
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
    svg {
      transform: translateX(3px) scale(1.2, 1.2);
    }
  }
`;

const PlayButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 106px;
  width: 106px;
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
    background: linear-gradient(0deg, #6138fe 0%, #f087b3 100%);
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
    background: linear-gradient(180deg, #6138fe 0%, #f087b3 100%);
    transform: scale(1, 1);
  }

  svg {
    z-index: 2;
    transform: translateX(3px);
    transition: transform 0.3s;
  }
`;

const LightboxOverlay = styled(DialogOverlay)`
  && {
    z-index: 999999;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .close {
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 16px;
    top: 16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(180deg, #6138fe 0%, #f087b3 100%);
    opacity: 1;
    z-index: 1;
    transition: transform 0.16s ease, -webkit-transform 0.16s ease;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 14px;
      height: 2px;
      width: 16px;
      background-color: white;
      transition: background-color 0.25s ease;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
`;

const LightboxContent = styled(DialogContent)`
  && {
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;

    > div {
      padding: 64px;
      width: 100%;
      max-width: 1378px;
      margin: 0 auto;

      iframe {
        border-radius: 8px;
      }

      @media (max-width: ${(p) => p.theme.breakpoints.maxSm}) {
        padding: 16px;
      }
    }
  }
`;

export const Video = ({ src }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box width="100%" maxWidth="960px" mx="auto">
      <Parallax
        y={['-8px', '8px']}
        styleOuter={{
          width: '100%',
        }}
        styleInner={{
          width: '100%',
        }}
      >
        <VideoWrapper>
          {!isOpen && (
            <Vimeo
              video={src}
              responsive
              autoplay
              controls={false}
              background
              muted
              loop
              autopause={false}
              showTitle={false}
              showByline={false}
              showPortrait={false}
            />
          )}

          <PlayButtonOuter
            onClick={() => {
              setOpen(true);
            }}
            aria-label="Play showreel"
          >
            <PlayButton>
              <Icon icon={<Play />} color="white" fontSize="36px" />
            </PlayButton>
          </PlayButtonOuter>

          {isOpen && (
            <LightboxOverlay
              isOpen
              onDismiss={() => {
                setOpen(false);
              }}
            >
              <span
                className="close"
                onClick={() => {
                  setOpen(false);
                }}
              />

              <LightboxContent>
                <Vimeo
                  video={src}
                  autoplay
                  controls
                  responsive
                  color="6138FE"
                  onEnd={() => setOpen(false)}
                />
              </LightboxContent>
            </LightboxOverlay>
          )}
        </VideoWrapper>
      </Parallax>
    </Box>
  );
};
