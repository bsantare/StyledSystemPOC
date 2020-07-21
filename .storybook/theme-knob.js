import React from "react";
import { select } from "@storybook/addon-knobs";
import { ThemeProvider } from 'emotion-theming'
import * as themes from '../src/theme'

export const ThemeKnob = ({ children }) => {
    const theme = select(
        "Theme",
        Object.keys(themes),
        'ExampleTheme',
    );

    return (
        <ThemeProvider theme={themes[theme]}>
            {children}
        </ThemeProvider>
    );
};
