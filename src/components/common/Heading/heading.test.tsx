import React from 'react';
import { axe } from 'jest-axe';

import { render, screen } from '~lib/test-utils';

import { Heading } from '.';

const text =
  'Quia doloremque assumenda laboriosam dignissimos quam autem recusandae optio.';

test('[Heading] should not fail accessibility testing', async () => {
  const { container } = render(
    <Heading variant="h1" as="h1">
      {text}
    </Heading>,
  );

  expect(await axe(container)).toHaveNoViolations();
});

test('renders content', async () => {
  render(
    <Heading variant="h1" as="h1">
      {text}
    </Heading>,
  );

  expect(screen.getByText(text)).toBeInTheDocument();
});
