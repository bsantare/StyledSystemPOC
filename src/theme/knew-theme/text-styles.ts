import * as CSS from 'csstype';
import { fontSizes, fontWeights } from '../example-theme/text-styles';
import {
  Font,
  font,
  FontWeight,
  fontWeight,
  lineHeight,
  textScale,
  TextStyles
} from '../shared';

export const fonts: Record<Font, CSS.FontFamilyProperty> = {
  [font.font1]: 'MuseoModerno',
  [font.font2]: 'Exo',
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
