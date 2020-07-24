import * as React from 'react';
import { Themeable } from './types';

export type SVGProps = React.ComponentPropsWithRef<'svg'> & Themeable & React.ComponentPropsWithRef<'div'>
