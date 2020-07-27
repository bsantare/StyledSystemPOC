import * as React from 'react';
import { Themeable } from './types';

export type CheckboxProps = React.ComponentPropsWithRef<'svg'> & Themeable & React.ComponentPropsWithRef<'div'> & React.ComponentPropsWithRef<'input'>
