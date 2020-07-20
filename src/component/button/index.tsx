import styled from "styled-components";
import { variant } from "styled-system";
import { defaultButtonVariants } from "../../theme/default/buttons";
import { Size } from "../../theme/token";

export const Button = styled("button")(
  variant({
    scale: "buttons",
    variants: defaultButtonVariants,
  }),
  variant({
    prop: "size",
    variants: {
      [Size.lg]: {
        width: Size.lg,
      },
      [Size.xs]: {
        width: Size.xs,
      },
    },
  })
);
