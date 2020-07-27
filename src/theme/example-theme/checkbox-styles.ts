import { color } from '../shared';

const base = {
  border: '1px',
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
  },
  width: 24,
  height: 24
};

export const checkboxVariants = {
  outlined: { ...base },
  transparent: { ...base }
};
