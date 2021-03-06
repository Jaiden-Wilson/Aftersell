import { FC } from 'react';
import { Box, SystemProps } from '@storyofams/react-ui';

import { Footer } from './Footer';
import { Navigation } from './Navigation';

interface LayoutProps extends SystemProps {
  footer: any;
  navigation: any;
}

export const Layout: FC<LayoutProps> = ({
  footer,
  navigation,
  children,
  ...props
}) => {
  return (
    <Box position="relative" minHeight="100vh" {...props}>
      <Navigation
        content={navigation?.content}
        navBackground={navigation?.navBackground}
      />
      <Box overflowY="hidden">{children}</Box>
      <Footer content={footer?.content} />
    </Box>
  );
};
