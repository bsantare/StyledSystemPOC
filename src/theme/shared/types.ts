import { SerializedStyles } from '@emotion/serialize';
import * as CSS from 'csstype';
import { Theme as SSTheme } from '@styled-system/css';
import {
  Font, IconType, TextScale, Color, color
} from './token';
import { ButtonSizes } from './buttons';
import { checkboxVariants } from '../example-theme/checkbox-styles';

export type TextStyles = Record<TextScale, Record<Partial<Font>, CSS.StandardProperties>>

export type Icons = Record<IconType, string>
export type IconInfo = {
  icons: Icons;
}

export type Theme =
  SSTheme
  & {
  textStyles: TextStyles;
  buttonSizes: ButtonSizes;
  iconInfo: IconInfo;
  globalStyles: SerializedStyles;
  checkboxes: typeof checkboxVariants;
  colors: Record<Color, typeof color[Color]>;
}
