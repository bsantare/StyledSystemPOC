import { CSSObject } from '@emotion/core';
import { color, ButtonVariant, Size } from '../token';

type ButtonVariantProps = CSSObject;
type ButtonVariants = Record<ButtonVariant, ButtonVariantProps>;
type ButtonSizes = Record<Size, CSSObject>;

export const buttonVariants: ButtonVariants = {
  filled: {
    bg: color.primary,
    color: color.white,
    ':hover': {
      bg: color.secondary,
    },
    ':disabled': {
      color: color.ash,
      bg: color.ghost,
    },
  },
  outlined: {
    border: '2px',
    color: color.primary,
    backgroundColor: color.white,
    borderStyle: 'solid',
    borderColor: color.primary,
    ':hover': {
      color: color.secondary,
      borderColor: color.secondary,
    },
    ':disabled': {
      color: color.ash,
      borderColor: color.ash,
    },
  },
  secondary: {
    border: '2px',
    color: color.slate,
    backgroundColor: color.white,
    borderStyle: 'solid',
    borderColor: color.primary,
    ':hover': {
      color: color.secondary,
      borderColor: color.secondary,
    },
    ':disabled': {
      color: color.ash,
      borderColor: color.ash,
    },
  },
};

export const buttonSizes: Partial<ButtonSizes> = {
  lg: {
    width: 'lg',
  },
  xs: {
    width: 'xs',
  },
};
