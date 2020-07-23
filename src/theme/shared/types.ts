import { SerializedStyles } from '@emotion/serialize';
import * as CSS from 'csstype';
import { Theme as SSTheme } from 'styled-system';
import { Font, TextScale } from './token';
import { ButtonSizes } from './buttons';

export type TextStyles = Record<TextScale, Record<Partial<Font>, CSS.StandardProperties>>

export type Theme =
    SSTheme
    & { textStyles: TextStyles; buttonSizes: ButtonSizes; globalStyles: SerializedStyles}
