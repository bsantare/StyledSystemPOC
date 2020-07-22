import * as CSS from 'csstype';
import { ObjectOrArray } from 'styled-system';
import { buttonSizes, buttonVariants } from './default/buttons';
import { radii, space } from './default/spacing';
import { Size, Color, color } from './token';

const colors: ObjectOrArray<CSS.ColorProperty> = {
  [color.text]: '#000',
  [color.background]: '#fff',
  [color.primary]: '#1cA69c',
  [color.secondary]: '#2e5763',
  [color.accent]: '#ffffff',
  [color.highlight]: '#f8f8f8',
  [color.muted]: '#f6f6f6',
  [color.slate]: '#404040',
  [color.grey]: '#757575',
  [color.ash]: '#e0e0e0',
  [color.alabaster]: '#f8f8f8',
  [color.white]: '#ffffff',
  [color.ghost]: '#f2f2f2',
};

const fonts: ObjectOrArray<CSS.FontFamilyProperty> = {
  barlow: 'Barlow',
  quicksand: 'Quicksand',
} as const;

const fontSizes: ObjectOrArray<CSS.FontSizeProperty<number>> = {
  sz62: '62px',
  sz60: '60px',
  sz50: '50px',
  sz40: '40px',
  sz38: '38px',
  sz32: '32px',
  sz30: '30px',
  sz26: '26px',
  sz24: '24px',
  sz22: '22px',
  sz18: '18px',
  sz16: '16px',
  sz12: '12px',
} as const;

const fontWeights: ObjectOrArray<CSS.FontWeightProperty> = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

const sizes: ObjectOrArray<
  CSS.HeightProperty<{}> | CSS.WidthProperty<{}>,
  Size
> = {
  full: '100%',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
} as const;

const ExampleTheme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,
  sizes,
  radii,
  buttons: buttonVariants,
  buttonSizes,
};

export default ExampleTheme;
