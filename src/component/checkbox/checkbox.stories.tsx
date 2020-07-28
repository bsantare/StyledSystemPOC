import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { Checkbox as CB } from './index';

export default {
  title: 'Checkbox',
  component: CB
};

export const Checkbox = () => (
  <>
    <CB disabled={boolean('Disabled', false)} />
    <span>Checkbox</span>
  </>
);
