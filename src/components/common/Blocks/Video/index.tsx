import { useEffect, useState, useRef } from 'react';
import { Box, Icon } from '@storyofams/react-ui';
import dynamic from 'next/dynamic';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

import '@reach/dialog/styles.css';

import { createIntersectionObserver } from '~lib';
import { Play } from '~components/common/Icon/library';

import type { VimeoVideo as VimeoVideoType } from './VimeoVideo';

const VimeoVideo = dynamic(() =>
  import('./VimeoVideo').then((mod) => mod.VimeoVideo),
) as typeof VimeoVideoType;

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

export const Video = ({ src }) => {
  const [isVisible, setVisible] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef();
  const observer = useRef<IntersectionObserver>();

  const addIntersectionObserver = async () => {
    observer.current = await createIntersectionObserver(
      wrapperRef.current,
      () => {
        setVisible(true);
      },
    );
  };

  useEffect(() => {
    if (wrapperRef.current) {
      addIntersectionObserver();
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <Box width="100%" maxWidth="960px" mx="auto" ref={wrapperRef}>
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
          {isVisible && (
            <VimeoVideo isOpen={isOpen} setOpen={setOpen} src={src} />
          )}

          <PlayButtonOuter
            onClick={() => {
              setOpen(true);
            }}
            aria-label="Play video"
          >
            <PlayButton>
              <Icon icon={<Play />} color="white" fontSize="36px" />
            </PlayButton>
          </PlayButtonOuter>
        </VideoWrapper>
      </Parallax>
    </Box>
  );
};
