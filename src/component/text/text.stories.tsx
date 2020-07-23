import { text } from '@storybook/addon-knobs';
import React from 'react';
import { font, textScale } from '../../theme/shared';
import { Text as TextComponent } from './index';

export default {
  title: 'Text',
  component: TextComponent
};

export const Text = () => {
  const textKnob = text('Text', 'Some example text');
  const ts = `${textScale.body2}.${font.font1}`;

  const components = Object.values(textScale)
    .map((txtScale, row) => Object.values(font)
      .map((fnt, col) => {
        const curDesc = `${txtScale} ${fnt}`;
        const curTextStyle = `${txtScale}.${fnt}`;
        return (
          <div
            key={curDesc}
            style={{
              gridRow: row + 1, gridColumn: col + 1, width: '100%', margin: 10
            }}
          >
            <TextComponent textStyle={curTextStyle}>{textKnob}</TextComponent>
            <TextComponent textStyle={ts}>{curDesc}</TextComponent>
          </div>
        );
      })).flat();

  return (
    <div style={{
      display: 'grid', gridGap: 5, marginLeft: 10
    }}
    >
      {components}
    </div>
  );
};
