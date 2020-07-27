import * as React from 'react';
import { Checkbox as CB } from './index';

export default {
  title: 'Checkbox',
  component: CB
};

export const Checkbox = () => (
  <>
    <CB />
    <span>Checkbox</span>
  </>
);

export const CheckboxDisabled = () => (
  <>
    <CB disabled />
    <span>Checkbox disabled</span>
  </>
);
