/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as styledSystem from '@styled-system/css';
import { Theme, get } from '@styled-system/css';
import styled from '@emotion/styled';
import {
  variant as ssVariant, borderRadius, color as ssColor, space, textStyle
} from 'styled-system';
import { useTheme } from 'emotion-theming';
import { useToggle } from '../../hooks/useToggle';
import { CheckboxProps } from '../../theme/shared/checkboxes';
import {
  checkboxVariant, HiddenInput, color
} from '../../theme/shared';
import { Icon } from '../icon';
import useHover from '../../hooks/use-hover';

const uncheckedCss = css`
  width: 24px;
  height: 24px;
  border-radius: 1px;
  border: solid 1px #8c8c8c;
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

export const CheckboxComponent = ({
  disabled, variant
}: CheckboxProps) => {
  const [on, toggle] = useToggle(true);
  const {
    hovered, bind
  } = useHover();
  const theme = useTheme<Theme>();

  // Extract the current variant's color from the theme
  const variantProps = styledSystem.css(
    get(theme, `checkboxes.${variant}`)
  )(theme);
  const {
    backgroundColor, ':hover': hoverProps
  } = variantProps;

  return (
    <StyledLabel {...bind}>
      <HiddenInput onClick={toggle} disabled={disabled} />
      <CheckboxWrapper>
        {on ? (
          <Icon
            icon="check"
            disabled={disabled}
            disabledColor="white"
            color="white"
            hovered={hovered}
            css={[css`background-color: ${hovered ? (hoverProps?.color || 'slategrey') : backgroundColor}`, uncheckedCss]}
          />
        ) : <CheckboxWrapper css={uncheckedCss} />}
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
