import * as CSS from 'csstype';
import { ObjectOrArray } from 'styled-system';
import { buttonSizes, buttonVariants } from './button-styles';
import { globalStyles } from './global-styles';
import { iconInfo } from './icon-styles';
import {
  fonts, fontSizes, fontWeights, textStyles
} from './text-styles';
import {
  color, Size, Theme, radii, space
} from '../shared';
import { checkboxVariants } from './checkbox-styles';

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

const sizes: ObjectOrArray<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>,
  Size> = {
    full: '100%',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem'
  } as const;

const Index: Theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,
  sizes,
  radii,
  textStyles,
  buttons: buttonVariants,
  buttonSizes,
  checkboxes: checkboxVariants,
  iconInfo,
  globalStyles
};

export default Index;
