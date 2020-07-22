import styled from '@emotion/styled';
import {
  borderRadius, buttonStyle, textStyle, variant
} from 'styled-system';
import { ButtonVariant, Size } from '../../theme/shared';
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
  variant: ButtonVariant.filled,
  size: Size.lg,
  textStyle: 'display8.barlow'
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
  borderRadius,
  textStyle
);

btn.defaultProps = defaultBtnProps;

export const Button = btn;
