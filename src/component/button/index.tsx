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
  fonts, fontSizes, fontWeights
} from '../../theme/example-theme/text-styles';
import {
  size,
  buttonVariant,
  ButtonVariant,
  Size,
  font,
  lineHeight,
  fontWeight,
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
  size: size.sm,
  lineHeight: lineHeight[26],
  fontFamily: fonts[font.font1],
  fontWeight: fontWeights[fontWeight.bold],
  fontSize: fontSizes[18]
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
