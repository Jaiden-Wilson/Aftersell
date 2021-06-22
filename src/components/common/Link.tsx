import { createElement, cloneElement } from 'react';
import { Box } from '@storyofams/react-ui';
import { motion } from 'framer-motion';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styled from 'styled-components';

import { useCursor } from './Cursor';
interface LinkProps extends NextLinkProps {
  children: any;
  onClick?(e?: any): void;
  smooth?: boolean;
  smoothOptions?: any;
  stylingProps?: any;
}

const Wrapper = styled(motion.div)`
  position: relative;
  display: inline-flex;
`;

export const Link = ({
  children,
  href,
  smooth,
  smoothOptions,
  stylingProps,
  ...props
}: LinkProps) => {
  const { zoom, reset } = useCursor();
  let to = href as string;
  const isExternal = /^https?:/.test(to);

  if (isExternal) {
    return (
      <Box {...stylingProps}>
        <Wrapper
          onHoverStart={() => {
            zoom();
          }}
          onHoverEnd={() => {
            reset();
          }}
        >
          {!children?.type || children?.type?.displayName === 'FormattedMessage'
            ? createElement((props.as as any) || 'a', {
                children,
                href: to,
                ...(isExternal
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {}),
                ...props,
              })
            : cloneElement(children, {
                href: to,
                ...(isExternal
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {}),
                ...props,
              })}
        </Wrapper>
      </Box>
    );
  }

  return (
    <Box {...stylingProps}>
      <Wrapper
        onHoverStart={() => {
          zoom();
        }}
        onHoverEnd={() => {
          reset();
        }}
      >
        <NextLink href={to} passHref {...props}>
          {!children?.type || children?.type?.displayName === 'FormattedMessage'
            ? createElement((props.as as any) || 'a', {
                children,
                ...props,
              })
            : cloneElement(children)}
        </NextLink>
      </Wrapper>
    </Box>
  );
};
