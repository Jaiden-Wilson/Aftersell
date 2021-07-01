import { Box, system, SystemProps } from '@storyofams/react-ui';
import styled from 'styled-components';
import { variant, ResponsiveValue } from 'styled-system';

export const headingVariants = {
  h1: {
    fontSize: ['36px', 9],
    fontWeight: 'semiBold',
    lineHeight: '120%',
  },
  h2: {
    fontSize: ['36px', 7],
    fontWeight: 'semiBold',
    lineHeight: '120%',
  },
  h3: {
    fontSize: [4, 4],
    fontWeight: 'semiBold',
    lineHeight: '120%',
  },
  h4: {
    fontSize: 3,
    fontWeight: 'semiBold',
    lineHeight: '120%',
  },
  h5: {
    fontSize: 2.5,
    fontWeight: 'semiBold',
    lineHeight: '120%',
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
