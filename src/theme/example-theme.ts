import * as CSS from "csstype";
import { ObjectOrArray, Theme } from "styled-system";
import { defaultButtonVariantsProps, buttonSizes } from "./default/buttons";
import { Size, Color } from "./token";

const colors: ObjectOrArray<CSS.ColorProperty> = {
  [Color.text]: "#000",
  [Color.background]: "#fff",
  [Color.primary]: "#1cA69c",
  [Color.secondary]: "#2e5763",
  [Color.accent]: "#ffffff",
  [Color.highlight]: "#f8f8f8",
  [Color.muted]: "#f6f6f6",
  [Color.slate]: "#404040",
  [Color.grey]: "#757575",
  [Color.ash]: "#e0e0e0",
  [Color.alabaster]: "#f8f8f8",
  [Color.white]: "#ffffff",
  [Color.ghost]: "#f2f2f2",
};

const fonts: ObjectOrArray<CSS.FontFamilyProperty> = {
  barlow: "Barlow",
  quicksand: "Quicksand",
};

const fontSizes: ObjectOrArray<CSS.FontSizeProperty<number>> = {
  sz62: "62px",
  sz60: "60px",
  sz50: "50px",
  sz40: "40px",
  sz38: "38px",
  sz32: "32px",
  sz30: "30px",
  sz26: "26px",
  sz24: "24px",
  sz22: "22px",
  sz18: "18px",
  sz16: "16px",
  sz12: "12px",
};

const fontWeights: ObjectOrArray<CSS.FontWeightProperty> = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const sizes: ObjectOrArray<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>> = {
  [Size.full]: "100%",
  [Size.xs]: "20rem",
  [Size.sm]: "24rem",
  [Size.md]: "28rem",
  [Size.lg]: "32rem",
  [Size.xl]: "36rem",
};

const space: ObjectOrArray<CSS.MarginProperty<number | string>> = {
  px: "1px",
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
};

const ExampleTheme: Theme & { buttonSizes: typeof buttonSizes } = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,
  sizes,
  buttons: defaultButtonVariantsProps,
  buttonSizes: buttonSizes,
};

export default ExampleTheme;
