import React from 'react';
import { storiesOf } from '@storybook/react';

import HeaderOne from './HeaderOne';

export const headerText = 'Header one title example text';

storiesOf('HeaderOne', module)
  .add('h1', () => <HeaderOne headerOneText={headerText} />);
