import React from 'react';

import { Button as ButtonStory } from '.';

export default {
  component: ButtonStory,
  title: 'components/Button',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'outline', 'secondary', 'secondary-outline'],
      },
    },
  },
};

export const Button = (args) => <Button {...args}>Lorem Ipsum</Button>;

Button.args = {
  variant: 'primary',
};
