import { Color, Variant } from "../token";

export const defaultButtonVariants = {
  [Variant.filled]: {
    bg: Color.primary,
    color: Color.white,
    "&:hover": {
      bg: Color.secondary,
    },
    "&:disabled": {
      color: Color.ash,
      bg: Color.ghost,
    },
  },
  [Variant.outlined]: {
    border: "2px",
    color: Color.primary,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.primary,
    "&:hover": {
      color: Color.secondary,
      borderColor: Color.secondary,
    },
    "&:disabled": {
      color: Color.ash,
      borderColor: Color.ash,
    },
  },
};
