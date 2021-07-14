import React, { ReactNode } from 'react';
import { Button as UIButton, SystemProps, system } from '@storyofams/react-ui';
import { m } from 'framer-motion';

import styled from 'styled-components';
import { variant, ResponsiveValue } from 'styled-system';
import { useCursor } from '../Cursor';
import { Link } from '../Link';

const variants = {
  primary: {
    bg: 'primary500',
    borderColor: 'primary500',
    color: 'white',

    '&:hover, &:focus': {
      bg: 'black',
      borderColor: 'black',
      color: 'white',
    },
  },
  outline: {
    borderColor: 'primary500',
    color: 'primary500',

    '&:hover, &:focus': {
      borderColor: 'black',
      bg: 'black',
      color: 'white',
    },
  },
  secondary: {
    bg: 'white',
    borderColor: 'white',
    color: 'primary500',

    '&:hover, &:focus': {
      bg: 'black',
      borderColor: 'black',
      color: 'white',
    },
  },
  'secondary-outline': {
    borderColor: 'white',
    color: 'white',

    '&:hover, &:focus': {
      bg: 'black',
      borderColor: 'black',
      color: 'white',
    },
  },
};

type ButtonProps = {
  isLoading?: boolean;
  to?: string | undefined;
  variant?: ResponsiveValue<keyof typeof variants>;
  children?: ReactNode;
  input?: boolean;
  value?: string;
} & SystemProps;

const Wrapper = styled(m.div)`
  position: relative;
  display: inline-flex;
`;

const StyledButton = styled(UIButton)<ButtonProps>`
  background: none;
  position: relative;
  padding: ${(p) => p.theme.space[1.5]}px ${(p) => p.theme.space[4]}px;
  border-width: 2px;
  border-style: solid;
  border-radius: ${(p) => p.theme.radii.sm};
  line-height: normal;
  font-weight: bold;
  font-size: ${(p) => p.theme.fontSizes[2]}px;
  letter-spacing: -0.04em;
  cursor: pointer;
  z-index: ${(p) => p.theme.zIndices.docked};
  transition: border 0.18s ease-in-out, color 0.18s ease-in-out,
    background-color 0.18s ease-in-out;

  ${variant({ variants })}
  ${system}
`;

export const Button = ({
  children,
  variant = 'primary',
  to,
  input,
  value,
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
      <StyledButton
        variant={variant}
        {...props}
        type={input && 'submit'}
        as={input ? 'input' : 'button'}
        value={value}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};
