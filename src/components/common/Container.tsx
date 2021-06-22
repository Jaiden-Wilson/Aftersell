import { ReactNode } from 'react';
import { Box, Stack, SystemProps } from '@storyofams/react-ui';

type ContainerProps = {
  children?: ReactNode;
  childProps?: any;
  space?: number | number[];
} & SystemProps;

export const Container = ({
  space = [3, 5],
  children,
  childProps,
  ...props
}: ContainerProps) => (
  <Box {...props}>
    <Stack
      space={space}
      position="relative"
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxWidth="maxWidth"
      px={[2, 2, '132px', '132px', 20]}
      py={[10, 20]}
      margin={'0 auto' as any}
      {...childProps}
    >
      {children}
    </Stack>
  </Box>
);
