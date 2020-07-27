import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { buttonVariant, size } from '../../theme/shared';
import { IconType, icon } from '../../theme/shared/token';
import { Button as CButton } from './index';

export default {
  title: 'Button',
  component: CButton
};

export const Button = () => {
  const iconSelect = select(
    'Icon',
    ['None'].concat(Object.keys(icon)),
    'None',
  );

  const iconName = iconSelect === 'None' ? undefined : iconSelect as IconType;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
    }}
    >
      <CButton
        disabled={boolean('Disabled', false)}
        variant={buttonVariant.filled}
        size={size.sm}
        style={{ marginBottom: 10 }}
        icon={iconName}
      >
        Small filled button
      </CButton>

      <CButton
        disabled={boolean('Disabled', false)}
        variant={buttonVariant.filled}
        size={size.md}
        style={{ marginBottom: 10 }}
        icon={iconName}
      >
        Medium filled button
      </CButton>

      <CButton
        disabled={boolean('Disabled', false)}
        variant={buttonVariant.filled}
        size={size.lg}
        style={{ marginBottom: 10 }}
        icon={iconName}
      >
        Large filled button
      </CButton>

      <CButton
        disabled={boolean('Disabled', false)}
        variant={buttonVariant.filled}
        size={size.lg}
        textStyle="display4.font2"
        style={{ marginBottom: 10 }}
        icon={iconName}
      >
        Large filled button - override textStyle
      </CButton>

      <CButton
        disabled={boolean('Disabled', false)}
        variant={buttonVariant.outlined}
        size={size.sm}
        style={{ marginBottom: 10 }}
        icon={iconName}
      >
        Small outlined button
      </CButton>

      <CButton
        disabled={boolean('Disabled', false)}
        variant={buttonVariant.outlined}
        size={size.md}
        style={{ marginBottom: 10 }}
        icon={iconName}
      >
        Medium filled button
      </CButton>

      <CButton
        disabled={boolean('Disabled', false)}
        variant={buttonVariant.outlined}
        size={size.lg}
        style={{ marginBottom: 10 }}
        icon={iconName}
      >
        Large outlined button
      </CButton>

      <CButton
        disabled={boolean('Disabled', false)}
        variant={buttonVariant.outlined}
        size={size.lg}
        textStyle="display4.font2"
        style={{ marginBottom: 10 }}
        icon={iconName}
      >
        Large outlined button - override textStyle
      </CButton>
    </div>
  );
};
