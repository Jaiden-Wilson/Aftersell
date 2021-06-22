import { DialogOverlay, DialogContent } from '@reach/dialog';
import { Box } from '@storyofams/react-ui';
import { transparentize } from 'polished';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';
import '@reach/dialog/styles.css';

const LightboxOverlay = styled(DialogOverlay)`
  && {
    z-index: 999999;
    background-color: ${(p) => transparentize(0.3, '#000')};
  }

  .close {
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 24px;
    top: 24px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid ${(p) => transparentize(0, '#F4F2FB')};
    background: ${(p) => transparentize(0, '#F4F2FB')};
    opacity: 1;
    z-index: 1;
    transition: transform 0.16s ease, -webkit-transform 0.16s ease;
    cursor: pointer;

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      height: 3px;
      width: 20px;
      border-radius: 2px;
      background-color: ${(p) => p.theme.colors.primary500};
      transition: background-color 0.25s ease;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
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
    width: calc(100% - 128px);
    max-width: 1024px;
    margin: 0;
    padding: 0;
    transform: translate(-50%, -50%);

    > div {
      position: relative;
      height: 0;
      padding: 56.25% 0 0 0;
      width: 100%;
      border-radius: 32px;
      overflow: hidden;
      z-index: 1;

      > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
        mask-image: radial-gradient(white, black);

        iframe {
          width: 100%;
          height: 100%;
        }
      }
    }

    @media (max-width: ${(p) => p.theme.breakpoints.maxSm}) {
      width: calc(100% - 32px);
    }
  }
`;

export const Player = ({ setOpen, src }) => {
  return (
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
        <Box>
          <ReactPlayer
            url={src}
            onEnd={() => {
              setOpen(false);
            }}
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  controls: true,
                },
              },
            }}
          />
        </Box>
      </LightboxContent>
    </LightboxOverlay>
  );
};
