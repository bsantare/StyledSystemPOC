import * as React from 'react';
import { TextStyles } from './types';

export type CheckboxProps = React.ComponentPropsWithRef<'svg'> &
  React.ComponentPropsWithRef<'div'> &
  React.ComponentPropsWithRef<'input'> & TextStyles & {size?: string}
