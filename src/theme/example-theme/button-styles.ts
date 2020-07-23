import {
  ButtonSizes, ButtonVariants, color
} from '../shared';
import { textStyles } from './text-styles';

export const buttonVariants: ButtonVariants = {
  filled: {
    bg: color.primary,
    color: color.white,
    ':hover': { bg: color.secondary },
    ':disabled': {
      color: color.ash,
      bg: color.ghost
    }
  },
  outlined: {
    border: '2px',
    color: color.primary,
    backgroundColor: color.white,
    borderStyle: 'solid',
    borderColor: color.primary,
    ':hover': {
      color: color.secondary,
      borderColor: color.secondary
    },
    ':disabled': {
      color: color.ash,
      borderColor: color.ash
    }
  },
  secondary: {
    border: '2px',
    color: color.slate,
    backgroundColor: color.white,
    borderStyle: 'solid',
    borderColor: color.primary,
    ':hover': {
      color: color.secondary,
      borderColor: color.secondary
    },
    ':disabled': {
      color: color.ash,
      borderColor: color.ash
    }
  }
} as const;

export const buttonSizes: ButtonSizes = {
  sm: {
    ...textStyles.label.font1,
    padding: '2px 4px'
  },
  md: {
    ...textStyles.display1.font1,
    padding: '4px 8px'
  },
  lg: {
    ...textStyles.display3.font1,
    padding: '8px 16px'
  }
} as const;
