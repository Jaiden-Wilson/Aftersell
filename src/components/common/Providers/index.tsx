import { FC } from 'react';
import { StoryProvider } from '@storyofams/storyblok-toolkit';
import { LazyMotion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { CursorProvider } from '~/components';

import theme from '~styles/theme';

const loadFeatures = () =>
  import('./motionFeatures').then((res) => res.default);

export const Providers: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoryProvider>
        <LazyMotion features={loadFeatures}>
          <CursorProvider>{children}</CursorProvider>
        </LazyMotion>
      </StoryProvider>
    </ThemeProvider>
  );
};
