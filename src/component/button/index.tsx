import styled from '@emotion/styled';
import { variant, buttonStyle, borderRadius } from 'styled-system';
import { ButtonVariant, Size } from '../../theme/token';
import { buttonSizes, buttonVariants } from '../../theme/default/buttons';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
  variants: buttonSizes
});

const btnVariants = variant({
  prop: 'variant',
  key: 'buttons',
  variants: buttonVariants,
});

const defaultBtnProps = {
  borderRadius: 2,
  variant: ButtonVariant.filled,
  size: Size.lg,
};

type DefaultBtnProps = Partial<typeof defaultBtnProps>;

const btn = styled('button')<DefaultBtnProps>(
  {
  },
  buttonSize,
  btnVariants,
  buttonStyle,
  borderRadius,
);

btn.defaultProps = defaultBtnProps;

export const Button = btn;
