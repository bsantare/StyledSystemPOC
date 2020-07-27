import { color } from '../shared';

export const checkboxVariants = {
  outlined: {
    border: '2px',
    color: color.primary,
    backgroundColor: color.primary,
    borderStyle: 'solid',
    borderColor: color.primary,
    ':hover': {
      color: color.secondary,
      borderColor: color.secondary
    },
    ':disabled': {
      color: color.grey,
      borderColor: color.grey
    }
  },
  transparent: {
    color: color.primary,
    backgroundColor: color.white,
    ':hover': { color: color.secondary, },
    ':disabled': { color: color.grey, }
  }
};
