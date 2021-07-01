import { ReactNode } from 'react';
import { css, Box, Stack, SystemProps } from '@storyofams/react-ui';
import { motion } from 'framer-motion';

import { useCursor } from '../Cursor';

type ContainerProps = {
  children?: ReactNode;
  childProps?: any;
  space?: number | number[];
  background?: 'none' | 'color' | 'gradient';
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
      <motion.div
        onHoverStart={() => {
          cursorBackground();
        }}
        onHoverEnd={() => {
          reset(true);
        }}
      >
        {children}
      </motion.div>
    );
  }

  return <>{children}</>;
};

export const Container = ({
  space = [3, 5],
  children,
  childProps,
  background,
  ...props
}: ContainerProps) => {
  return (
    <ContainerWrapper background={background}>
      <Box
        position="relative"
        pt={background !== 'none' && [4, 10]}
        pb={background !== 'none' && [4, 10]}
        px={[0, 6]}
        color={background === 'gradient' ? 'white' : 'black'}
        css={css({
          background:
            background === 'gradient' &&
            'linear-gradient(180deg, #6138FE 0%, #F087B3 100%)',
        })}
        overflow="hidden"
        {...props}
      >
        {background === 'color' && (
          <Box
            position="absolute"
            borderRadius={[0, 'lg']}
            bg="primary100"
            top={[4, 10]}
            left={[0, 6]}
            bottom={[4, 10]}
            right={[0, 6]}
            className="background"
          />
        )}
        <Stack
          space={space}
          position="relative"
          flexDirection="column"
          alignItems="center"
          width="100%"
          maxWidth="maxWidth"
          pt={background === 'color' && [4, 10]}
          pb={background === 'color' && [4, 10]}
          px={[2, 6]}
          margin="0 auto"
          zIndex="docked"
          {...childProps}
        >
          {children}
          {background === 'gradient' && (
            <Box
              position="absolute"
              borderRadius="full"
              bottom={[0, '50%']}
              left="50%"
              width={['100%', 'calc(100% - 96px)']}
              mt="0 !important"
              pt={['100%', 'calc(100% - 96px)']}
              transform="translate(-50%, 50%)"
              zIndex="hide"
              css={css({
                background: 'linear-gradient(180deg, #6138FE 0%, #F087B3 100%)',
              })}
            />
          )}
        </Stack>
      </Box>
    </ContainerWrapper>
  );
};
