import React, { ReactNode } from 'react';
import { Button as UIButton, SystemProps } from '@storyofams/react-ui';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import { variant, ResponsiveValue } from 'styled-system';
import { useCursor } from '../Cursor';
import { Link } from '../Link';

const variants = {
  primary: {
    bg: 'primary500',
    color: 'white',

    '&:hover, &:focus': {},
  },
  outline: {
    bg: 'primary500',
    color: 'white',

    '&:hover, &:focus': {},
  },
  secondary: {
    bg: 'primary500',
    color: 'white',

    '&:hover, &:focus': {},
  },
  'secondary-outline': {
    bg: 'primary500',
    color: 'white',

    '&:hover, &:focus': {},
  },
};

type ButtonProps = {
  isLoading?: boolean;
  to?: string | undefined;
  variant?: ResponsiveValue<keyof typeof variants>;
  children?: ReactNode;
} & SystemProps;

const Wrapper = styled(motion.div)`
  position: relative;
  display: inline-flex;
`;

const StyledButton = styled(UIButton)<ButtonProps>`
  background: none;
  position: relative;
  padding: ${(p) => p.theme.space[2]}px ${(p) => p.theme.space[4]}px;
  line-height: normal;
  font-weight: bold;
  font-size: ${(p) => p.theme.fontSizes[2]};
  letter-spacing: -0.04em;
  cursor: pointer;
  z-index: ${(p) => p.theme.zIndices.docked};

  ${variant({ variants })}
`;

export const Button = ({
  children,
  variant = 'primary',
  to,
  ...props
}: ButtonProps) => {
  const { zoom, reset } = useCursor();

  if (to) {
    return (
      <Link href={to}>
        <StyledButton variant={variant} {...props} as="a">
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <Wrapper
      onHoverStart={() => {
        zoom();
      }}
      onHoverEnd={() => {
        reset();
      }}
    >
      <StyledButton variant={variant} {...props}>
        {children}
      </StyledButton>
    </Wrapper>
  );
};
