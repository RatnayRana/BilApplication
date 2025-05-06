import { ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';
import { colors } from '../../utils/color';

export const Wrapper = ({children}: {children: ReactNode}) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:colors.white}}>
      {children}
  </SafeAreaView>
  );
};
