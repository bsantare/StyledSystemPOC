import styled from '@emotion/styled';
import { variant, buttonStyle } from 'styled-system';
import { Variant, Size } from '../../theme/token';
import { defaultButtonVariantsProps } from '../../theme/default/buttons';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
});

const buttons = variant({
  prop: 'variant',
  key: 'buttons',
  variants: defaultButtonVariantsProps,
});

const defaultBtnProps = {
  variant: Variant.filled,
  size: Size.lg,
};

type DefaultBtnProps = Partial<typeof defaultBtnProps>;

const btn = styled('button')<DefaultBtnProps>(
  {},
  buttonSize,
  buttons,
  buttonStyle
);

btn.defaultProps = defaultBtnProps;

export const Button = btn;
