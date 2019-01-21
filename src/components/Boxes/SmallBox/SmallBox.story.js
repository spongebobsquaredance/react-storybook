import React from 'react';
import { storiesOf } from '@storybook/react';

import SmallBox from './SmallBox';

storiesOf('SmallBox', module)
  .add('24px Box', () => <SmallBox />);
