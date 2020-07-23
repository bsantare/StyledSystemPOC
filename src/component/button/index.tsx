import {
  variant,
  buttonStyle,
  borderRadius,
  TextStyleProps,
  color,
  space,
  textStyle
} from 'styled-system';
import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import {
  size,
  buttonVariant,
  ButtonVariant,
  Size,
  font, textScale,
} from '../../theme/shared';

const buttonSize = variant({
  prop: 'size',
  scale: 'buttonSizes',
  variants: { [size.sm]: {}, },
});

const btnVariants = variant({
  scale: 'buttons',
  variants: { primary: {}, },
});

const defaultBtnProps = {
  borderRadius: 2,
  variant: buttonVariant.filled,
  size: size.md,
  textStyle: `${textScale.label}.${font.font1}`,
};

type DefaultBtnProps = {
    variant?: ButtonVariant;
    size?: Size;
} & ButtonHTMLAttributes<unknown> & TextStyleProps;

const ButtonComponent = styled('button')<DefaultBtnProps>(
  {},
  buttonSize,
  btnVariants,
  buttonStyle,
  borderRadius,
  color,
  space,
  textStyle
);

ButtonComponent.defaultProps = defaultBtnProps;

export const Button = ButtonComponent;
