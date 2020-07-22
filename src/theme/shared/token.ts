import { AsUnion } from '../util.types';

export enum Font {
  font1 = 'font1',
  font2 = 'font2',
}

export enum FontWeight {
  regular = 'regular',
  medium = 'medium',
  bold = 'bold',
}

export enum TextScale {
  display1 = 'display1',
  display2 = 'display2',
  display3 = 'display3',
  display4 = 'display4',
  display5 = 'display5',
  display6 = 'display6',
  display7 = 'display7',
  display8 = 'display8',
  body1 = 'body1',
  body2 = 'body2',
  label = 'label',
  caption = 'caption',
}

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

export const color = {
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

export type Color = AsUnion<typeof color>;
