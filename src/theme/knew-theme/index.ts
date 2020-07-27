import * as CSS from 'csstype';
import { ObjectOrArray } from 'styled-system';
import { buttonSizes, buttonVariants } from './button-styles';
import { globalStyles } from './global-styles';
import { iconInfo } from '../example-theme/icon-styles';
import { fontSizes, fontWeights } from '../example-theme/text-styles';
import {
  color, Size, Theme, radii, space
} from '../shared';
import { fonts, textStyles } from './text-styles';
import { checkboxVariants } from '../example-theme/checkbox-styles';

const colors: ObjectOrArray<CSS.ColorProperty> = {
  [color.text]: '#E5E7E9',
  [color.background]: '#E8F6F3',
  [color.primary]: '#5B2C6F',
  [color.secondary]: '#D35400',
  [color.accent]: '#BB8FCE',
  [color.highlight]: '#F5EEF8',
  [color.muted]: '#f6f6f6',
  [color.slate]: '#404040',
  [color.grey]: '#757575',
  [color.ash]: '#e0e0e0',
  [color.alabaster]: '#f8f8f8',
  [color.white]: '#ffffff',
  [color.ghost]: '#f2f2f2'
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
