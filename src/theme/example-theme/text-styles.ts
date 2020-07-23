import * as CSS from 'csstype';
import {
  Font,
  font,
  FontWeight,
  fontWeight,
  lineHeight,
  textScale,
  TextStyles
} from '../shared';

export const fontSizes: Record<number, CSS.FontSizeProperty<string>> = {
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
  20: '20px',
  18: '18px',
  16: '16px',
  12: '12px',
} as const;

export const fontWeights: Record<FontWeight, CSS.FontWeightProperty> = {
  [fontWeight.regular]: 400,
  [fontWeight.medium]: 500,
  [fontWeight.bold]: 700,
};

export const fonts: Record<Font, CSS.FontFamilyProperty> = {
  [font.font1]: 'Barlow',
  [font.font2]: 'Quicksand',
};

export const textStyles: TextStyles = {
  [textScale.display8]: {
    [font.font1]: {
      lineHeight: lineHeight[76],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.bold],
      fontSize: fontSizes[60]
    },
    [font.font2]: {
      lineHeight: lineHeight[76],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[40]
    }
  },
  [textScale.display7]: {
    [font.font1]: {
      lineHeight: lineHeight[62],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.bold],
      fontSize: fontSizes[38]
    },
    [font.font2]: {
      lineHeight: lineHeight[76],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[62]
    }
  },
  [textScale.display6]: {
    [font.font1]: {
      lineHeight: lineHeight[50],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.bold],
      fontSize: fontSizes[38]
    },
    [font.font2]: {
      lineHeight: lineHeight[62],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[50]
    }
  },
  [textScale.display5]: {
    [font.font1]: {
      lineHeight: lineHeight[40],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.bold],
      fontSize: fontSizes[30]
    },
    [font.font2]: {
      lineHeight: lineHeight[50],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[40]
    }
  },
  [textScale.display4]: {
    [font.font1]: {
      lineHeight: lineHeight[40],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.bold],
      fontSize: fontSizes[32]
    },
    [font.font2]: {
      lineHeight: lineHeight[40],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[32]
    }
  },
  [textScale.display3]: {
    [font.font1]: {
      lineHeight: lineHeight[26],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.bold],
      fontSize: fontSizes[20]
    },
    [font.font2]: {
      lineHeight: lineHeight[32],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[26]
    }
  },
  [textScale.display2]: {
    [font.font1]: {
      lineHeight: lineHeight[26],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.bold],
      fontSize: fontSizes[18]
    },
    [font.font2]: {
      lineHeight: lineHeight[26],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[22]
    }
  },
  [textScale.display1]: {
    [font.font1]: {
      lineHeight: lineHeight[26],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.medium],
      fontSize: fontSizes[18]
    },
    [font.font2]: {
      lineHeight: lineHeight[26],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[20]
    }
  },
  [textScale.body2]: {
    [font.font1]: {
      lineHeight: lineHeight[26],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[18]
    },
    [font.font2]: {
      lineHeight: lineHeight[26],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[20]
    }
  },
  [textScale.body1]: {
    [font.font1]: {
      lineHeight: lineHeight[24],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[16]
    },
    [font.font2]: {
      lineHeight: lineHeight[24],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[18]
    }
  },
  [textScale.label]: {
    [font.font1]: {
      lineHeight: lineHeight[24],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.bold],
      fontSize: fontSizes[16]
    },
    [font.font2]: {
      lineHeight: lineHeight[24],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[18]
    }
  },
  [textScale.caption]: {
    [font.font1]: {
      lineHeight: lineHeight[20],
      fontFamily: fonts[font.font1],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[12]
    },
    [font.font2]: {
      lineHeight: lineHeight[20],
      fontFamily: fonts[font.font2],
      fontWeight: fontWeights[fontWeight.regular],
      fontSize: fontSizes[16]
    }
  }
};
