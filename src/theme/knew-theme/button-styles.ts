import {
  ButtonSizes, ButtonVariants, color
} from '../shared';
import { buttonVariants as exButtonVariants, buttonSizes as exButtonSizes } from '../example-theme/button-styles';

const {
  filled, outlined, secondary
} = exButtonVariants;

const {
  sm, md, lg
} = exButtonSizes;

export const buttonVariants: ButtonVariants = {
  filled: {
    ...filled,
    ':disabled': {
      color: color.highlight,
      borderColor: color.highlight,
      backgroundColor: color.accent,
    }
  },
  outlined: {
    ...outlined,
    color: color.primary,
    backgroundColor: color.accent,
    borderColor: color.accent,
    border: '5px',
    ':disabled': {
      color: color.highlight,
      borderColor: color.highlight
    }
  },
  secondary: {
    ...secondary,
    border: '8px',
    ':disabled': {
      color: color.highlight,
      borderColor: color.highlight
    }
  }
} as const;

export const buttonSizes: ButtonSizes = {
  sm: {
    ...sm,
    borderRadius: '30',
    padding: '5px 15px 5px 15px'
  },
  md: {
    ...md,
    borderRadius: '50',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  lg: {
    ...lg,
    borderRadius: '100'
  }
} as const;
