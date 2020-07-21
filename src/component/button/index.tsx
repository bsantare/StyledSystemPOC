/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { variant, buttonStyle } from "styled-system";
import { buttonSizes } from "../../theme/default/buttons";
import { Variant, Size } from "../../theme/token";

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes",
});

const defaultBtnProps = {
  variant: Variant.filled,
  size: Size.lg,
};

type DefaultBtnProps = Partial<typeof defaultBtnProps>;

const _Button = styled("button")<DefaultBtnProps>({}, buttonSize, buttonStyle);

_Button.defaultProps = defaultBtnProps;

export const Button = _Button;
