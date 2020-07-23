import * as CSS from 'csstype';
import { ObjectOrArray, TLengthStyledSystem } from 'styled-system';

export const radii: ObjectOrArray<CSS.BorderRadiusProperty<TLengthStyledSystem>> = {
  0: 0,
  2: 2,
  4: 4,
  8: 8
} as const;

export const space: ObjectOrArray<CSS.MarginProperty<number | string>> = {
  px: '1px',
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
} as const;

export const lineHeight: Record<string, CSS.LineHeightProperty<TLengthStyledSystem>> = {
  76: '76px',
  62: '62px',
  50: '50px',
  40: '40px',
  32: '32px',
  26: '26px',
  24: '24px',
  20: '20px'
} as const;
