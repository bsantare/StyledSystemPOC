import styled from "@emotion/styled";
import { variant } from "styled-system";
import {
  buttonSizes,
  defaultButtonVariantsProps,
} from "../../theme/default/buttons";
import { Size, Variant } from "../../theme/token";

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes",
});

type ButtonVariants = {
  variant: keyof typeof defaultButtonVariantsProps; // variant is a required prop now
  size?: keyof typeof buttonSizes;
};

const _Button = styled("button")<ButtonVariants>(buttonSize);

_Button.defaultProps = {
  variant: Variant.filled,
  size: Size.lg,
};

export const Button = _Button;
