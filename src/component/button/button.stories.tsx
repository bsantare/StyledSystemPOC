import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { Size, Variant } from "../../theme/token";
import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
};

export const FilledTextButton = () => (
  <Button
    disabled={boolean("Disabled", false)}
    variant={Variant.filled}
    size={Size.lg}
  >
    Filled text button
  </Button>
);

export const OutlineTextButton = () => (
  <Button
    disabled={boolean("Disabled", false)}
    variant={Variant.outlined}
    size={Size.xs}
  >
    Outline text button
  </Button>
);
