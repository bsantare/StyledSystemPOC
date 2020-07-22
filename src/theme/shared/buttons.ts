import { CSSObject } from '@emotion/core';
import { ButtonVariant, Size, color } from './token';
import { CSSProp } from '../util.types';

export type ButtonVariantProps = CSSProp;
export type ButtonVariants = Record<ButtonVariant, ButtonVariantProps>;
export type ButtonSizes = Partial<Record<Size, CSSObject>>;

export const buttonVariants: ButtonVariants = {
  filled: {
    bg: color.primary,
    color: color.white,
    ':hover': {
      bg: color.secondary
    },
    ':disabled': {
      color: color.ash,
      bg: color.ghost
    }
  },
  outlined: {
    border: '2px',
    color: color.primary,
    backgroundColor: color.white,
    borderStyle: 'solid',
    borderColor: color.primary,
    ':hover': {
      color: color.secondary,
      borderColor: color.secondary
    },
    ':disabled': {
      color: color.ash,
      borderColor: color.ash
    }
  },
  secondary: {
    border: '2px',
    color: color.slate,
    backgroundColor: color.white,
    borderStyle: 'solid',
    borderColor: color.primary,
    ':hover': {
      color: color.secondary,
      borderColor: color.secondary
    },
    ':disabled': {
      color: color.ash,
      borderColor: color.ash
    }
  }
};

export const buttonSizes: ButtonSizes = {
  lg: {
    width: 'lg'
  },
  xs: {
    width: 'xs'
  }
};
