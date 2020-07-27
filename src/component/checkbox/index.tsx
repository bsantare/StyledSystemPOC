import * as React from 'react';
import styled from '@emotion/styled';
import { useToggle } from '../../hooks/useToggle';
import { CheckBoxChecked, CheckboxUnchecked } from './checkbox-icon';
import { CheckboxProps } from '../../theme/shared/checkboxes';
import { color } from '../../theme/shared';

const StyledControl = styled.div({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'top',
  userSelect: 'none',
  flexShrink: 0,
  color: color.white,
});

const StyledContainer = styled.label({
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'top',
  position: 'relative'
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

export const Checkbox = (props: CheckboxProps) => {
  const [on, toggle] = useToggle(true);
  return (
    <StyledContainer>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <HiddenInput onClick={toggle} disabled={props.disabled} />
      <StyledControl>
        {on ? <CheckBoxChecked {...props} /> : <CheckboxUnchecked {...props} />}
      </StyledControl>
    </StyledContainer>
  );
};
