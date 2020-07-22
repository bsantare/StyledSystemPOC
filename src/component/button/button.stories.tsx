import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { ButtonVariant, Size } from '../../theme/shared';
import { Button } from './index';

export default {
  title: 'Button',
  component: Button,
};

export const FilledTextButton = () => (
  <>
    <Button
      disabled={boolean('Disabled', false)}
      variant={ButtonVariant.filled}
      textStyle="display8.font1"
      style={{ marginRight: 10 }}
    >
      Filled text button Barlow display8
    </Button>
    <Button
      disabled={boolean('Disabled', false)}
      variant={ButtonVariant.filled}
      textStyle="display7.font2"
      style={{ marginRight: 10 }}
    >
      Filled text button Quicksand display7
    </Button>
  </>
);

export const OutlineTextButton = () => (
  <Button
    disabled={boolean('Disabled', false)}
    variant={ButtonVariant.outlined}
    size={Size.xs}
    textStyle="display8.font2"
  >
    Outline text button
  </Button>
);
