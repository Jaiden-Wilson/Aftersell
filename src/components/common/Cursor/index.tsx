import React, {
  createContext,
  useRef,
  useEffect,
  RefObject,
  ReactNode,
} from 'react';
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import styled from 'styled-components';

export * from './useCursor';

const StyledCursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 6px;
  height: 6px;
  opacity: 0;
  border-radius: 50%;
  z-index: 999999999;
  pointer-events: none;

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    display: none;
  }
`;

interface ContextProps {
  cursor: RefObject<HTMLDivElement>;
  hide(): void;
  reset(backgroundReset?: boolean): void;
  zoom(): void;
  background(): void;
}

interface ProviderProps {
  children: ReactNode;
}

export const CursorContext = createContext<ContextProps | undefined>({
  cursor: { current: null },
  hide: () => {},
  reset: () => {},
  zoom: () => {},
  background: () => {},
});

export const CursorProvider = ({ children }: ProviderProps) => {
  const cursorRef = useRef(null);
  const isShowing = useRef(false);

  const animation = useAnimation();

  const opacity = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacitySpring = useSpring(opacity, { bounce: 0.3 });
  const scaleSpring = useSpring(scale, { bounce: 0.3 });

  const onEnter = () => {
    opacity.set(1);
  };

  const onLeave = () => {
    opacity.set(0);
  };

  useEffect(() => {
    const moveCursor = (e) => {
      animation.start(
        { translateX: e.clientX - 3, translateY: e.clientY - 3 },
        { duration: 0.2, ease: [0.5, 1, 0.89, 1] },
      );

      if (!isShowing.current) {
        isShowing.current = true;
        opacity.set(1);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      animation.stop();
    };
  }, []);

  const zoom = () => {
    opacity.set(0.4);
    scale.set(4);
  };

  const hide = () => {
    opacity.set(0);
  };

  const reset = (backgroundReset = false) => {
    opacity.set(1);
    scale.set(1);

    if (backgroundReset) {
      animation.start({ backgroundColor: '#6138FE' });
    }
  };

  const background = () => {
    animation.start({ backgroundColor: '#ffffff' });
  };

  return (
    <CursorContext.Provider
      value={{ cursor: cursorRef, zoom, hide, reset, background }}
    >
      {children}

      <StyledCursor
        ref={cursorRef}
        initial={{ backgroundColor: '#6138FE' }}
        animate={animation}
        style={{
          opacity: opacitySpring,
          scale: scaleSpring,
        }}
        transition={{
          ease: [0.5, 1, 0.89, 1],
          duration: 0.3,
        }}
      />
    </CursorContext.Provider>
  );
};
