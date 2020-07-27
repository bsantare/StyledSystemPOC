/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {
  variant as ssVariant, borderRadius, color as ssColor, space, textStyle
} from 'styled-system';
import { useToggle } from '../../hooks/useToggle';
import { CheckboxProps } from '../../theme/shared/checkboxes';
import {
  checkboxVariant, HiddenInput, color
} from '../../theme/shared';
import { Icon } from '../icon';

const uncheckedCss = css`
  width: 24px;
  height: 24px;
  border-radius: 1px;
  border: solid 1px ${color.medium};
  &:hover {
    border: solid 2px ${color.slate};
  }
`;

const checkboxes = ssVariant({
  scale: 'checkboxes',
  variants: { primary: {} }
});
const CheckboxWrapper = styled.div`display: 'inline-flex';`;
const StyledLabel = styled.label`cursor: 'pointer'; placeItems: 'center';`;

export const CheckboxComponent = (props: CheckboxProps) => {
  const [on, toggle] = useToggle(true);
  return (
    <StyledLabel>
      <HiddenInput onClick={toggle} disabled={props.disabled} />
      <CheckboxWrapper>
        {on ? <Icon {...props} icon="check" /> : <div css={uncheckedCss} />}
      </CheckboxWrapper>
    </StyledLabel>
  );
};

const StyledCheckboxComponent = styled(CheckboxComponent)<CheckboxProps>(
  {},
  checkboxes,
  borderRadius,
  ssColor,
  space,
  textStyle
);

StyledCheckboxComponent.defaultProps = {
  variant: checkboxVariant.transparent,
  color: 'white'
};

export const Checkbox = StyledCheckboxComponent;
