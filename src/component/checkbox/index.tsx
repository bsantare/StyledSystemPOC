import * as React from 'react';
import styled from '@emotion/styled';
import {
  variant as ssVariant, borderRadius, color as ssColor, space, textStyle
} from 'styled-system';
import { useToggle } from '../../hooks/useToggle';
import { CheckBoxChecked, CheckboxUnchecked } from './checkbox-icon';
import { CheckboxProps } from '../../theme/shared/checkboxes';
import {
  color, lineHeight, font, fontWeight, checkboxVariant, HiddenInput
} from '../../theme/shared';
import {
  fonts, fontWeights, fontSizes
} from '../../theme/example-theme/text-styles';
import { checkboxVariants } from '../../theme/example-theme/checkbox-styles';
import { Icon } from '../icon';

const checkboxes = ssVariant({
  scale: 'checkboxes',
  variants: { primary: {} }
});

const defaultCheckboxProps = {
  borderRadius: 2,
  variant: checkboxVariant.transparent,
  lineHeight: lineHeight[26],
  fontFamily: fonts[font.font1],
  fontWeight: fontWeights[fontWeight.bold],
  fontSize: fontSizes[18]
};

const StyledControl = styled.div({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'top',
  userSelect: 'none',
  flexShrink: 0,
});

const StyledContainer = styled.label({
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'top',
  position: 'relative'
});

export const CheckboxComponent = (props: CheckboxProps) => {
  const [on, toggle] = useToggle(true);
  return (
    <StyledContainer>
      <HiddenInput onClick={toggle} disabled={props.disabled} />
      <StyledControl>
        {on ? <Icon {...props} icon="check" /> : <CheckboxUnchecked {...props} />}
      </StyledControl>
    </StyledContainer>
  );
};

const StyledCheckboxComponent = styled(CheckboxComponent)<CheckboxProps>(
  {},
  checkboxVariants,
  borderRadius,
  ssColor,
  space,
  textStyle
);

StyledCheckboxComponent.defaultProps = defaultCheckboxProps;

export const Checkbox = StyledCheckboxComponent;
