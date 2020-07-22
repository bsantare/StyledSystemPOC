import styled from '@emotion/styled';
import { variant, buttonStyle, borderRadius } from 'styled-system';
import { ButtonHTMLAttributes } from 'react';
import { size, buttonVariant, ButtonVariant, Size } from '../../theme/token';

const buttonSize = variant({
  prop: 'size',
  scale: 'buttonSizes',
  variants: {
    [size.xs]: {},
  },
});

const btnVariants = variant({
  scale: 'buttons',
  variants: {
    primary: {},
  },
});

const defaultBtnProps = {
  borderRadius: 2,
  variant: buttonVariant.filled,
  size: size.lg,
};

type DefaultBtnProps = {
  variant?: ButtonVariant;
  size?: Size;
} & ButtonHTMLAttributes<unknown>;

const btn = styled('button')<DefaultBtnProps>(
  {},
  buttonSize,
  btnVariants,
  buttonStyle,
  borderRadius
);

btn.defaultProps = defaultBtnProps;

export const Button = btn;
