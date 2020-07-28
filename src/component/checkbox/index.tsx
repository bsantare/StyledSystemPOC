/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as styledSystem from '@styled-system/css';
import { get } from '@styled-system/css';
import styled from '@emotion/styled';
import {
 variant as ssVariant, borderRadius, color as ssColor, space, textStyle
} from 'styled-system';
import { useTheme } from 'emotion-theming';
import { useToggle } from '../../hooks/useToggle';
import { CheckboxProps } from '../../theme/shared/checkboxes';
import {
 checkboxVariant, HiddenInput, color, Theme
} from '../../theme/shared';
import { Icon } from '../icon';
import useHover from '../../hooks/use-hover';

const checkboxes = ssVariant({
  scale: 'checkboxes',
  variants: { primary: {} }
});
const CheckboxWrapper = styled.div`
  display: inline-flex;
  width: 24px;
  height: 24px;
`;
const StyledLabel = styled.label`
  cursor: 'pointer'; 
  placeItems: 'center';
`;
const EmptyBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 1px;
  border: solid 1px #8c8c8c;
  &:hover {
    border: solid 2px ${color.slate};
  }
  &:disabled {
    background-color: white;
  }
`;
export const CheckboxComponent = ({
  disabled, variant
}: CheckboxProps) => {
  const [on, toggle] = useToggle(true);
  const {bind} = useHover();
  const theme = useTheme<Theme>();

  // Extract the current variant's color from the theme
  const {backgroundColor} = styledSystem.css(get(theme, `checkboxes.${variant}`))(theme);

  return (
    <StyledLabel>
      <HiddenInput onClick={toggle} disabled={disabled} />
      <CheckboxWrapper {...bind}>
        {on
          ? (
            <Icon
              icon="check"
              color="white"
              css={
               css({
                 backgroundColor: `${backgroundColor}`,
                 ':hover': {backgroundColor: theme.colors.secondary},
                 width: 24,
                 height: 24
               })
             }
            />
          ) : <EmptyBox />}
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
