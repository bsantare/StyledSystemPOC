import * as CSS from 'csstype';
import { ObjectOrArray } from 'styled-system';
import {
  Font, FontWeight, lineHeight, TextScale, TextStyles
} from '../shared';

export const fontSizes: ObjectOrArray<CSS.FontSizeProperty<number>> = {
  62: '62px',
  60: '60px',
  50: '50px',
  40: '40px',
  38: '38px',
  32: '32px',
  30: '30px',
  26: '26px',
  24: '24px',
  22: '22px',
  18: '18px',
  16: '16px',
  12: '12px',
};

export const fontWeights: ObjectOrArray<CSS.FontWeightProperty> = {
  [FontWeight.regular]: 400,
  [FontWeight.medium]: 500,
  [FontWeight.bold]: 700,
};

export const fonts: ObjectOrArray<CSS.FontFamilyProperty> = {
  [Font.font1]: 'Barlow',
  [Font.font2]: 'Quicksand',
};

export const textStyles = {
  [TextScale.display8]: {
    [Font.font1]: {
      lineHeight: lineHeight[76],
      fontFamily: fonts[Font.font1],
      fontWeight: fontWeights[FontWeight.bold],
      fontSize: fontSizes[60]
    },
    [Font.font2]: {
      lineHeight: lineHeight[76],
      fontFamily: fonts[Font.font2],
      fontWeight: fontWeights[FontWeight.regular],
      fontSize: fontSizes[62]
    }
  },
  [TextScale.display7]: {
    [Font.font1]: {
      lineHeight: lineHeight[62],
      fontFamily: fonts[Font.font1],
      fontWeight: fontWeights[FontWeight.bold],
      fontSize: fontSizes[38]
    },
    [Font.font2]: {
      lineHeight: lineHeight[62],
      fontFamily: fonts[Font.font2],
      fontWeight: fontWeights[FontWeight.regular],
      fontSize: fontSizes[50]
    }
  }
};
