import { AsUnion } from '../util.types';

export const buttonVariant = {
  filled: 'filled',
  outlined: 'outlined',
  secondary: 'secondary',
} as const;

export type ButtonVariant = AsUnion<typeof buttonVariant>;

export const size = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  full: 'full',
} as const;

export type Size = AsUnion<typeof size>;

export const colors = {
  text: 'text',
  background: 'background',
  primary: 'primary',
  secondary: 'secondary',
  accent: '#ffffff',
  highlight: '#f8f8f8',
  muted: '#f6f6f6',
  slate: '#404040',
  grey: '#757575',
  ash: '#e0e0e0',
  alabaster: '#f8f8f8',
  white: '#ffffff',
  ghost: '#f2f2f2',
} as const;

export type Color = AsUnion<typeof colors>;
