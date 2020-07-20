import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import * as themes from '../src/theme'
import { withThemes } from '@react-theming/storybook-addon/dist/preview'
import { withKnobs } from '@storybook/addon-knobs'
import { VIEWPORT_BREAKPOINTS } from './viewport-breakpoints'
import { ThemeProvider } from 'emotion-theming'

const themeObjArr = Object.keys(themes)
    .sort((a, b) => a === 'ExampleTheme' ? -1 : 1)
    .map(key => {
        return { name: key, theme: themes[key], default: key === 'ExampleTheme' }
    });

addParameters({
    viewport: {
        viewports: VIEWPORT_BREAKPOINTS,
    },
});

addDecorator(withKnobs)

addDecorator(withThemes(ThemeProvider, themeObjArr))
