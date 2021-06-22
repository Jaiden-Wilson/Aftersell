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
    <Box overflow="hidden" {...props}>
      <Navigation content={navigation} />
      {children}
      <Footer content={footer} />
    </Box>
  );
};
