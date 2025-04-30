import { ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';

export const Wrapper = ({children}: {children: ReactNode}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1}}>
      {children}
    </View>
  </SafeAreaView>
  );
};
