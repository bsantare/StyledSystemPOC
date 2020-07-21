import styled from '@emotion/styled';
import { variant, buttonStyle } from 'styled-system';
import { Variant, Size } from '../../theme/token';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
});

const defaultBtnProps = {
  variant: Variant.filled,
  size: Size.lg,
};

type DefaultBtnProps = Partial<typeof defaultBtnProps>;

const btn = styled('button')<DefaultBtnProps>({}, buttonSize, buttonStyle);

btn.defaultProps = defaultBtnProps;

export const Button = btn;
