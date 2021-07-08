import { DialogOverlay, DialogContent } from '@reach/dialog';
import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';

import '@reach/dialog/styles.css';

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

export const VimeoVideo = ({ isOpen, setOpen, src }) => {
  return (
    <>
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

          <LightboxContent aria-label="Video overlay">
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
    </>
  );
};
