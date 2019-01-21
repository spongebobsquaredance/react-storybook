import React from 'react';
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react';
import theme from './../src/styles/theme';
import '../src/reset.css';
import '../src/index.css';

const req = require.context('../src/', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
