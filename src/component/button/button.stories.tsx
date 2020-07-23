import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { buttonVariant, size } from '../../theme/shared';
import { Button } from './index';

export default {
  title: 'Button',
  component: Button
};

export const FilledTextButton = () => (
  <div style={{
    display: 'flex', flexDirection: 'column'
  }}
  >
    <Button
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.sm}
      style={{ marginBottom: 10 }}
    >
      Small filled button
    </Button>

    <Button
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.md}
      style={{ marginBottom: 10 }}
    >
      Medium filled button
    </Button>

    <Button
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.lg}
      style={{ marginBottom: 10 }}
    >
      Large filled button
    </Button>
  </div>
);

export const OutlineTextButton = () => (
  <Button
    disabled={boolean('Disabled', false)}
    variant={buttonVariant.outlined}
    size={size.lg}
  >
    Outline text button
  </Button>
);
