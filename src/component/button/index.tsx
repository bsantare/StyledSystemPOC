import {
  variant, buttonStyle, borderRadius, textStyle, TextStyleProps
} from 'styled-system';
import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import {
  size, buttonVariant, ButtonVariant, Size
} from '../../theme/shared';

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
  textStyle: 'display8.barlow',
};

type DefaultBtnProps = {
  variant?: ButtonVariant;
  size?: Size;
} & ButtonHTMLAttributes<unknown> & TextStyleProps;

const btn = styled('button')<DefaultBtnProps>(
  {},
  buttonSize,
  btnVariants,
  buttonStyle,
  borderRadius,
  textStyle
);

btn.defaultProps = defaultBtnProps;

export const Button = btn;
