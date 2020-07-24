import * as React from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { CheckboxProps } from '../../theme/shared/checkboxes';
import { useToggle } from '../../hooks/useToggle';
import { CheckBoxChecked, CheckboxUnchecked } from './checkbox-icon';

const StyledControl = styled.div({
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'top',
    userSelect: 'none',
    flexShrink: 0
  }
});

const StyledContainer = styled.label({
  baseStyle: {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'top',
    position: 'relative'
  }
});

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Checkbox = forwardRef<CheckboxProps>((
  props,
  ref
) => {
  const [on, toggle] = useToggle(true);
  return (
    <StyledContainer>
      <HiddenInput onClick={toggle} />
      <StyledControl>
        {on ? <CheckBoxChecked /> : <CheckboxUnchecked />}
      </StyledControl>
    </StyledContainer>
  );
});
