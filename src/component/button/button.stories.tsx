import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { buttonVariant, size } from '../../theme/token';
import { Button } from './index';

export default {
  title: 'Button',
  component: Button,
};

export const FilledTextButton = () => (
  <Button disabled={boolean('Disabled', false)} variant={buttonVariant.filled}>
    Filled text button
  </Button>
);

export const OutlineTextButton = () => (
  <Button
    disabled={boolean('Disabled', false)}
    variant={buttonVariant.outlined}
    size={size.md}
  >
    Outline text button
  </Button>
);

export const SecondTextButton = () => (
  <Button
    disabled={boolean('Disabled', false)}
    variant={buttonVariant.outlined}
    size={size.xs}
  >
    Outline text button
  </Button>
);
