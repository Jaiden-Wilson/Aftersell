import { ReactNode } from 'react';
import { css, Box, Stack, SystemProps } from '@storyofams/react-ui';
import { m } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { Parallax } from 'react-scroll-parallax';

import { useCursor } from '../Cursor';

type ContainerProps = {
  children?: ReactNode;
  childProps?: any;
  space?: number | number[];
  background?: 'none' | 'color' | 'gradient';
  noBgAnimation?: boolean;
} & SystemProps;

export const ContainerWrapper = ({
  background,
  children,
}: {
  background?: 'none' | 'color' | 'gradient';
  children?: ReactNode;
}) => {
  const { background: cursorBackground, reset } = useCursor();

  if (background === 'gradient') {
    return (
      <m.div
        onHoverStart={() => {
          cursorBackground();
        }}
        onHoverEnd={() => {
          reset(true);
        }}
      >
        {children}
      </m.div>
    );
  }

  return <>{children}</>;
};

export const Container = ({
  space = [3, 5],
  children,
  childProps,
  background,
  noBgAnimation,
  ...props
}: ContainerProps) => {
  return (
    <ContainerWrapper background={background}>
      <Box
        position="relative"
        pt={background !== 'none' && [4, 10]}
        pb={background !== 'none' && [4, 10]}
        px={[0, 0, 6]}
        css={css({
          background:
            background === 'gradient' &&
            'linear-gradient(180deg, #6138FE 0%, #F087B3 100%)',
          color: background === 'gradient' ? 'white' : 'grey500',
          'h1, h2, h3, h4, h5': {
            color: background === 'gradient' ? 'white' : 'black',
          },
        })}
        textAlign="center"
        overflow={background === 'color' ? 'visible' : 'hidden'}
        zIndex="docked"
        {...props}
      >
        {background === 'color' && (
          <>
            {noBgAnimation ? (
              <Parallax
                y={['-40px', '40px']}
                styleOuter={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '100%',
                }}
                styleInner={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '100%',
                }}
              >
                <Box
                  position="absolute"
                  borderRadius={['none', 'none', 'lg']}
                  bg="primary100"
                  top={[4, 5]}
                  left={[0, 0, 6]}
                  bottom={[4, 5]}
                  right={[0, 0, 6]}
                  className="background"
                  boxShadow={['none', 'none', 'sm']}
                />
              </Parallax>
            ) : (
              <Fade
                duration={1200}
                fraction={0.3}
                triggerOnce
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '100%',
                }}
              >
                <Parallax
                  y={['-40px', '40px']}
                  styleOuter={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: '100%',
                  }}
                  styleInner={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <Box
                    position="absolute"
                    borderRadius={['none', 'none', 'lg']}
                    bg="primary100"
                    top={[4, 5]}
                    left={[0, 0, 6]}
                    bottom={[4, 5]}
                    right={[0, 0, 6]}
                    className="background"
                    boxShadow={['none', 'none', 'sm']}
                  />
                </Parallax>
              </Fade>
            )}
          </>
        )}
        <Stack
          space={space}
          position="relative"
          flexDirection="column"
          alignItems="center"
          width="100%"
          maxWidth="maxWidth"
          pt={background === 'color' && [4, 4, 10]}
          pb={background === 'color' && [4, 4, 10]}
          px={[2, 6]}
          margin="0 auto"
          zIndex="docked"
          {...childProps}
        >
          {children}
          {background === 'gradient' && (
            <Parallax
              y={['80px', '-80px']}
              styleOuter={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '100%',
                zIndex: -1,
              }}
              styleInner={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '100%',
              }}
            >
              <Box
                position="absolute"
                borderRadius="full"
                bottom={[0, '50%']}
                left="50%"
                width={['100%', 'calc(100% - 240px)']}
                mt="0 !important"
                pt={['100%', 'calc(100% - 240px)']}
                transform="translate(-50%, 50%)"
                zIndex="hide"
                css={css({
                  background:
                    'linear-gradient(180deg, #6138FE 0%, #F087B3 100%)',
                })}
              />
            </Parallax>
          )}
        </Stack>
      </Box>
    </ContainerWrapper>
  );
};
