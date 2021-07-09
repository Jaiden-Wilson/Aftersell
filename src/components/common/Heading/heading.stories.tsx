import React from 'react';

import { Heading, headingVariants as variants } from '.';

export default {
  component: Heading,
  title: 'components/Heading',
};

const Template = () =>
  Object.keys(variants).map((key) => (
    <Heading
      key={key}
      variant={key as keyof typeof variants}
      mb={4}
      children={`Heading variant ${key}`}
    />
  ));

export const Basic = Template.bind({});
