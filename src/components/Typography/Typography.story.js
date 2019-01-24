import React from 'react';
import { storiesOf } from '@storybook/react';

import { H1, H2, H3, H4, H5, H6 } from './';

storiesOf('Headers', module)
  .add('h1', () => <H1 as="h1">Header one example text</H1>)
  .add('h2', () => <H2 as="h2">Header two example text</H2>)
  .add('h3', () => <H3 as="h3">Header three example text</H3>)
  .add('h4', () => <H4 as="h4">Header four example text</H4>)
  .add('h5', () => <H5 as="h5">Header five example text</H5>)
  .add('h6', () => <H6 as="h6">Header six example text</H6>);
