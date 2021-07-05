import React, { ReactNode, useState } from 'react';
import { css, Box, Flex, SystemProps } from '@storyofams/react-ui';
import { useMeasure } from 'react-use';

import { Heading } from './Heading';

export interface AccordionProps extends SystemProps {
  title: string;
  children: ReactNode | string;
}

export const Accordion = ({ title, children, ...props }: AccordionProps) => {
  const [open, setOpen] = useState(false);
  const [ref, { height }] = useMeasure();

  return (
    <Box
      borderBottom="1px solid"
      borderBottomColor="black"
      mt="-1px"
      textAlign="left"
    >
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        /** @ts-ignore this is an indication of whats wrong with the return type of the polymorph */
        onClick={() => setOpen(!open)}
        py={[3, 5]}
        cursor="pointer"
        {...props}
      >
        <Heading variant="h5" as="h5" color="black">
          {title}
        </Heading>
        <Flex
          css={css({
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: ['24px', '24px'],
            '&::before, &::after': {
              content: JSON.stringify(''),
              bg: 'black',
              right: 0,
              top: '50%',
              height: '2px',
              width: ['10px', '18px'],
              display: 'block',
              transition: '0.1s transform ease-in-out',
              borderRadius: '2px',
            },
            '&::after': {
              transform: `translateY(-2px) rotate(${open ? '0deg' : '90deg'})`,
            },
          })}
        />
      </Flex>
      <Box
        maxHeight={open ? [`${height + 3 * 8}px`, `${height + 5 * 8}px`] : 0}
        transition="max-height ease 0.3s"
        overflow="hidden"
      >
        <Box
          pb={[3, 5]}
          transition="opacity ease 0.25s"
          opacity={open ? 1 : 0}
          ref={ref}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
