import { Box, system, SystemProps } from '@storyofams/react-ui';
import styled from 'styled-components';
import { variant, ResponsiveValue } from 'styled-system';

export const headingVariants = {
  h1: {
    fontSize: ['36px', 9],
  },
  h2: {
    fontSize: ['28px', 7],
  },
  h3: {
    fontSize: [3, 4],
  },
  h4: {
    fontSize: 3,
  },
  h5: {
    fontSize: [2, 3],
    fontWeight: 'bold',
  },
  h6: {
    fontSize: 2,
    fontWeight: 'bold',
  },
};

type CustomProps = {
  variant:
    | ResponsiveValue<keyof typeof headingVariants>
    | keyof typeof headingVariants;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & SystemProps;

export const Heading = styled(Box).attrs((props: CustomProps) => ({
  as: props?.as ?? 'h1',
}))<CustomProps>`
  font-family: ${(p) => p.theme.fonts.heading};
  line-height: ${(p) => p.theme.lineHeights.normal};
  font-weight: ${(p) => p.theme.fontWeights.extraBold};

  ${variant({ variants: headingVariants })}
  ${system};
`;
