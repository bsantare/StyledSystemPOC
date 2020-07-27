import * as React from 'react';
import { TextStyles } from './types';
import { Color, CheckboxVariant } from './token';

export type CheckboxProps = React.ComponentPropsWithRef<'svg'> &
  React.ComponentPropsWithRef<'div'> &
  React.ComponentPropsWithRef<'input'> & TextStyles & {
  size?: string;
  color?: Color;
  variant: CheckboxVariant;
}
