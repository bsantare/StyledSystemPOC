import * as CSS from 'csstype';
import { ObjectOrArray } from 'styled-system';
import {
  Size, Color, buttonSizes, buttonVariants, radii, space,
  Theme
} from '../shared';

import { globalStyles } from './global-styles';
import {
  fonts, fontSizes, fontWeights, textStyles
} from './text-styles';

const colors: ObjectOrArray<CSS.ColorProperty> = {
  [Color.text]: '#000',
  [Color.background]: '#fff',
  [Color.primary]: '#1cA69c',
  [Color.secondary]: '#2e5763',
  [Color.accent]: '#ffffff',
  [Color.highlight]: '#f8f8f8',
  [Color.muted]: '#f6f6f6',
  [Color.slate]: '#404040',
  [Color.grey]: '#757575',
  [Color.ash]: '#e0e0e0',
  [Color.alabaster]: '#f8f8f8',
  [Color.white]: '#ffffff',
  [Color.ghost]: '#f2f2f2',
};

const sizes: ObjectOrArray<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>> = {
  [Size.full]: '100%',
  [Size.xs]: '20rem',
  [Size.sm]: '24rem',
  [Size.md]: '28rem',
  [Size.lg]: '32rem',
  [Size.xl]: '36rem',
};

const Index: Theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,
  sizes,
  radii,
  buttons: buttonVariants,
  buttonSizes,
  textStyles,
  globalStyles
};

export default Index;
