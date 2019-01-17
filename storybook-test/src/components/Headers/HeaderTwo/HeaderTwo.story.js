import React from 'react';
import { storiesOf } from '@storybook/react';

import HeaderTwo from './HeaderTwo';

export const headerText = 'Header two title example text';

storiesOf('HeaderTwo', module)
  .add('h2', () => <HeaderTwo headerTwoText={headerText} />);
