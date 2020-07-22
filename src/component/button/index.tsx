import styled from '@emotion/styled';
import {
  borderRadius, buttonStyle, textStyle, variant
} from 'styled-system';
import { ButtonVariant, Size } from '../../theme/shared';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
  variants: {
    [Size.xs]: {}
  }
});

const btnVariants = variant({
  key: 'buttons',
  variants: {
    [ButtonVariant.outlined]: {}
  },
});

const defaultBtnProps = {
  borderRadius: 2,
  variant: ButtonVariant.filled,
  size: Size.lg,
  textStyle: 'display8.barlow'
};

type DefaultBtnProps = Partial<typeof defaultBtnProps>;

const btn = styled('button')<DefaultBtnProps>(
  {
  },
  buttonSize,
  btnVariants,
  buttonStyle,
  borderRadius,
  textStyle
);

btn.defaultProps = defaultBtnProps;

export const Button = btn;
