import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import {
  buttonVariant, size, IconType, icon
} from '../../theme/shared';
import { Button as CButton } from './index';

export default {
  title: 'Button',
  component: CButton
};

const buildButtons = (iconName: IconType | undefined, hideText: boolean) => (
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
      {!hideText && 'Small filled button'}
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.md}
      style={{ marginBottom: 10 }}
      icon={iconName}
    >
      {!hideText && 'Medium filled button'}
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.lg}
      style={{ marginBottom: 10 }}
      icon={iconName}
    >
      {!hideText && 'Large filled button'}
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.lg}
      textStyle="display4.font2"
      style={{ marginBottom: 10 }}
      icon={iconName}
    >
      {!hideText && 'Large filled button - override textStyle'}
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.outlined}
      size={size.sm}
      style={{ marginBottom: 10 }}
      icon={iconName}
    >
      {!hideText && 'Small outlined button'}
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.outlined}
      size={size.md}
      style={{ marginBottom: 10 }}
      icon={iconName}
    >
      {!hideText && 'Medium filled button'}
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.outlined}
      size={size.lg}
      style={{ marginBottom: 10 }}
      icon={iconName}
    >
      {!hideText && 'Large outlined button'}
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.outlined}
      size={size.lg}
      textStyle="display4.font2"
      style={{ marginBottom: 10 }}
      icon={iconName}
    >
      {!hideText && 'Large outlined button - override textStyle'}
    </CButton>
  </div>
);

export const Button = () => buildButtons(undefined, false);

export const ButtonWithIcon = () => {
  const iconSelect = select(
    'Icon',
    Object.keys(icon),
    'arrowUpDown',
  );

  const hideText = boolean('Hide Text', false);

  return buildButtons(iconSelect as IconType, hideText);
};
