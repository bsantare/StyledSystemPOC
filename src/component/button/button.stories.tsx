import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { buttonVariant, size } from '../../theme/shared';
import { Button as CButton } from './index';

export default {
  title: 'Button',
  component: CButton
};

export const Button = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
  }}
  >
    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.sm}
      style={{ marginBottom: 10 }}
    >
      Small filled button
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.md}
      style={{ marginBottom: 10 }}
    >
      Medium filled button
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.lg}
      style={{ marginBottom: 10 }}
    >
      Large filled button
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.filled}
      size={size.lg}
      textStyle="display4.font2"
      style={{ marginBottom: 10 }}
    >
      Large filled button - override textStyle
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.outlined}
      size={size.sm}
      style={{ marginBottom: 10 }}
    >
      Small outlined button
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.outlined}
      size={size.md}
      style={{ marginBottom: 10 }}
    >
      Medium filled button
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.outlined}
      size={size.lg}
      style={{ marginBottom: 10 }}
    >
      Large outlined button
    </CButton>

    <CButton
      disabled={boolean('Disabled', false)}
      variant={buttonVariant.outlined}
      size={size.lg}
      textStyle="display4.font2"
      style={{ marginBottom: 10 }}
    >
      Large outlined button - override textStyle
    </CButton>
  </div>
);
