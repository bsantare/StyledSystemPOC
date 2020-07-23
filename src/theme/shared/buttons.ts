import { ButtonVariant, size } from './token';
import { AsUnion, CSSProp } from '../util.types';

export type ButtonVariantProps = CSSProp;
export type ButtonVariants = Record<ButtonVariant, ButtonVariantProps>;

export type ButtonSize = AsUnion<Pick<typeof size, 'sm' | 'md' | 'lg'>>;
export type ButtonSizes = Partial<Record<ButtonSize, CSSProp>>;
