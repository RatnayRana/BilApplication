import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootStack from './stackscreen';
import { navigationRef } from '../post/golbal/navigation-services';

export const StackWrapper: React.FC<{children?: React.ReactNode}> = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};
