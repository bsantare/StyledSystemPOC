import css, { Theme, get } from '@styled-system/css';
import { useTheme } from 'emotion-theming';
import React, { ButtonHTMLAttributes } from 'react';
import {
  variant as ssVariant,
  buttonStyle,
  borderRadius,
  TextStyleProps,
  color as ssColor,
  space,
  textStyle
} from 'styled-system';

import styled from '@emotion/styled';
import useHover from '../../hooks/use-hover';
import {
  fonts, fontSizes, fontWeights
} from '../../theme/example-theme/text-styles';
import {
  size,
  buttonVariant,
  ButtonVariant,
  Size,
  font,
  lineHeight,
  fontWeight,
  IconType, ButtonSize,
} from '../../theme/shared';
import { Icon } from '../icon';

const FlowContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  margin-right: 5px;
`;

const buttonSize = ssVariant({
  prop: 'size',
  scale: 'buttonSizes',
  variants: { [size.sm]: {}, },
});

const btnVariants = ssVariant({
  scale: 'buttons',
  variants: { primary: {}, },
});

const defaultBtnProps = {
  borderRadius: 2,
  variant: buttonVariant.filled,
  size: size.sm,
  lineHeight: lineHeight[26],
  fontFamily: fonts[font.font1],
  fontWeight: fontWeights[fontWeight.bold],
  fontSize: fontSizes[18]
};

export interface ButtonProps {
  icon?: IconType;
  size?: ButtonSize;
}

type DefaultBtnProps = {
    variant?: ButtonVariant;
    size?: Size;
} & ButtonHTMLAttributes<unknown> & TextStyleProps;

const ButtonComponent: React.FC<DefaultBtnProps & ButtonProps> = ({
  icon, disabled, variant: btnVariant, size: btnSize, children, ...rest
}) => {
  const {
    hovered, bind
  } = useHover();
  const theme = useTheme<Theme>();

  // Extract the current variant's color from the theme
  const buttonVariantProps = css(
    get(theme, `buttons.${btnVariant}`)
  )(theme);
  const {
    color, ':disabled': disabledProps, ':hover': hoverProps
  } = buttonVariantProps;

  // Extract the current variant's text style from the size
  const { iconSize } = css(
    get(theme, `buttonSizes.${btnSize}`)
  )(theme);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" disabled={disabled} {...bind} {...rest}>
      <FlowContent>
        {icon && (
        <StyledIcon
          icon={icon}
          size={iconSize?.toString()}
          disabled={disabled}
          color={color}
          disabledColor={disabledProps?.color}
          hovered={hovered}
          hoverColor={hoverProps?.color}
        />
        )}
        {children}
      </FlowContent>
    </button>
  );
};

const StyledButtonComponent = styled(ButtonComponent)<DefaultBtnProps & ButtonProps>(
  {},
  buttonSize,
  btnVariants,
  buttonStyle,
  borderRadius,
  ssColor,
  space,
  textStyle
);
StyledButtonComponent.defaultProps = defaultBtnProps;

export const Button = StyledButtonComponent;
