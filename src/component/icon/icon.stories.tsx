import { select } from '@storybook/addon-knobs';
import React from 'react';
import { Icon as IconComponent } from './index';
import {
  IconType, icon, color
} from '../../theme/shared';

export default {
  title: 'Icon',
  component: IconComponent
};

export const Icon = () => {
  const colorSelect = select(
    'Color',
    Object.keys(color),
    'primary',
  );

  const components = Object.keys(icon)
    .map((iconName, index) => {
      const curIdx = `index_${index}`;
      return (
        <div
          style={{
            gridColumn: (index % 10) + 1, gridRow: index / 10 + 1
          }}
          key={curIdx}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 25
          }}
          >
            <span style={{ marginBottom: 10 }}>{iconName}</span>
            <IconComponent
              icon={iconName as IconType}
              themeColor={colorSelect}
              size="25px"
            />
          </div>
        </div>
      );
    });

  return (
    <div style={{ display: 'grid' }}>
      {components}
    </div>
  );
};
