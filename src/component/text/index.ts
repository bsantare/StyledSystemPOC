import styled from '@emotion/styled';
import { textStyle, TextStyleProps } from 'styled-system';

const defaultTextProps = { textStyle: 'display2.font1', } as const;

type DefaultTextProps = TextStyleProps;

const TextComponent = styled('div')<DefaultTextProps>(
  {},
  textStyle
);

TextComponent.defaultProps = defaultTextProps;

export const Text = TextComponent;
