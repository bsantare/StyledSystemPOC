import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { ReactSVG } from 'react-svg';
import {
 IconType, Theme, colorGuard
} from '../../theme/shared';

type SVGProps = typeof ReactSVG

interface IconProps extends Partial<SVGProps> {
  icon: IconType;
  disabled?: boolean;
  themeColor?: string;
  // Raw color code
  color?: string;
  hovered?: boolean;
  hoverColor?: string;
  disabledColor?: string;
  className?: string;
  size?: string;
}

const IconComponent: React.FC<IconProps> = ({
  className, icon, size = '25px'
}) => {
  const { iconInfo: { icons } } = useTheme<Theme>();

  return (<ReactSVG src={icons[icon]} className={className} width={size} height={size} />);
};

const StyledIconComponent = styled(IconComponent)<IconProps, Theme>(({
  color,
  size,
  disabled,
  disabledColor,
  hoverColor,
  themeColor,
  hovered,
  theme: { colors }
}) => {
  let strokeColor;
  if (colorGuard(themeColor)) {
    strokeColor = !disabled ? colors[themeColor] : disabledColor;
  } else {
    strokeColor = !disabled ? color : disabledColor;
  }

  // Hover color overrides
  if (hovered && hoverColor) {
    strokeColor = hoverColor;
  }

  return {
    '> div': {
      height: size,
      width: size
    },
    svg: {
      height: size,
      width: size
    },
    path: {
      stroke: strokeColor,
      fill: strokeColor,
      ':hover': {
        stroke: hoverColor,
        fill: hoverColor
      }
    }
  };
});

export const Icon = StyledIconComponent;
