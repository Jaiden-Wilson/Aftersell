import React, { FC } from 'react';
import { Flex, SystemProps } from '@storyofams/react-ui';

export const Divider: FC<SystemProps> = ({ color = 'grey300', ...props }) => {
  return (
    <Flex
      as="span"
      bg={color}
      minHeight="1px"
      width="100%"
      flex="1"
      {...props}
    />
  );
};
