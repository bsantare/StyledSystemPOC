import { CSSObject } from '@emotion/core';
import { colors, ButtonVariant, Size } from '../token';

type ButtonVariantProps = CSSObject;
type ButtonVariants = Record<ButtonVariant, ButtonVariantProps>;
type ButtonSizes = Record<Size, CSSObject>;

export const buttonVariants: ButtonVariants = {
  filled: {
    bg: colors.primary,
    color: colors.white,
    ':hover': {
      bg: colors.secondary,
    },
    ':disabled': {
      color: colors.ash,
      bg: colors.ghost,
    },
  },
  outlined: {
    border: '2px',
    color: colors.primary,
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderColor: colors.primary,
    ':hover': {
      color: colors.secondary,
      borderColor: colors.secondary,
    },
    ':disabled': {
      color: colors.ash,
      borderColor: colors.ash,
    },
  },
  secondary: {
    border: '2px',
    color: colors.slate,
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderColor: colors.primary,
    ':hover': {
      color: colors.secondary,
      borderColor: colors.secondary,
    },
    ':disabled': {
      color: colors.ash,
      borderColor: colors.ash,
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
