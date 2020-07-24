import * as React from 'react';
import { Checkbox as CB } from './index';
import { CheckBoxChecked, CheckboxUnchecked } from './checkbox-icon';

export default {
  title: 'Checkbox',
  component: CB
};

export const Checkbox = () => (
  <CB>hey you</CB>
);

export const CheckboxCheckedIcon = () => (
  <CheckBoxChecked />
);

export const CheckboxUncheckedIcon = () => (
  <CheckboxUnchecked />
);
