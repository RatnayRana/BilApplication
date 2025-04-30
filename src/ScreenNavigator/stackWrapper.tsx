import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootStack from './stackscreen';

export const StackWrapper: React.FC<{children?: React.ReactNode}> = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
