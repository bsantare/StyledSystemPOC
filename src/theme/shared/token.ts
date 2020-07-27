import { AsUnion } from '../util.types';

export const font = {
  font1: 'font1',
  font2: 'font2',
} as const;

export type Font = AsUnion<typeof font>;

export const fontWeight = {
  regular: 'regular',
  medium: 'medium',
  bold: 'bold',
} as const;

export type FontWeight = AsUnion<typeof fontWeight>;

export const textScale = {
  display1: 'display1',
  display2: 'display2',
  display3: 'display3',
  display4: 'display4',
  display5: 'display5',
  display6: 'display6',
  display7: 'display7',
  display8: 'display8',
  body1: 'body1',
  body2: 'body2',
  label: 'label',
  caption: 'caption',
} as const;

export type TextScale = AsUnion<typeof textScale>;

export const buttonVariant = {
  filled: 'filled',
  outlined: 'outlined',
  secondary: 'secondary',
} as const;

export type ButtonVariant = AsUnion<typeof buttonVariant>;

export const size = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  full: 'full',
} as const;

export type Size = AsUnion<typeof size>;

export const color = {
  text: 'text',
  background: 'background',
  primary: 'primary',
  secondary: 'secondary',
  turquoiseDark: '#2e5763',
  turquoise: '#1ca69c',
  accent: 'accent',
  highlight: 'highlight',
  muted: 'muted',
  slate: 'slate',
  grey: 'grey',
  ash: 'ash',
  alabaster: 'alabaster',
  white: 'white',
  medium: 'medium',
  ghost: 'ghost',
} as const;

export type Color = AsUnion<typeof color>;

export const icon = {
  arrowUpDown: 'arrowUpDown',
  error: 'error',
  phoneLandline: 'phoneLandline',
  accessibility: 'accessibility',
  minus: 'minus',
  arrowLast: 'arrowLast',
  menu: 'menu',
  geolocation: 'geolocation',
  upload: 'upload',
  calendarNew: 'calendarNew',
  cancelClose: 'cancelClose',
  arrowLeft: 'arrowLeft',
  calendar: 'calendar',
  comment: 'comment',
  arrowUp: 'arrowUp',
  delete: 'delete',
  edit: 'edit',
  more: 'more',
  arrowBottom: 'arrowBottom',
  openNewWindow: 'openNewWindow',
  moreAndroid: 'moreAndroid',
  notification: 'notification',
  zoomOut: 'zoomOut',
  message: 'message',
  thumbDown: 'thumbDown',
  zoomIn: 'zoomIn',
  mic: 'mic',
  infoCircle: 'infoCircle',
  check: 'check',
  plus: 'plus',
  arrowTop: 'arrowTop',
  awardWinning: 'awardWinning',
  phoneMobile: 'phoneMobile',
  time: 'time',
  download: 'download',
  settings: 'settings',
  arrowRight: 'arrowRight',
  arrowFirst: 'arrowFirst',
  favouritesFilled: 'favouritesFilled',
  list: 'list',
  favouritesOutlined: 'favouritesOutlined',
  locationPin: 'locationPin',
  home: 'home',
  viewList: 'viewList',
  account: 'account',
  viewGrid: 'viewGrid',
  thumbUp: 'thumbUp',
  locked: 'locked',
  arrowDown: 'arrowDown',
  search: 'search',
};

export type IconType = AsUnion<typeof icon | undefined>;

export const checkboxVariant = {
  transparent: 'transparent',
  outlined: 'outlined',
} as const;

export type CheckboxVariant = AsUnion<typeof checkboxVariant>;
