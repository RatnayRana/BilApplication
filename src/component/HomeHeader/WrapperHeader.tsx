import { ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';

export const WrapperHeader = ({children}: {children: ReactNode}) => {
    return (
        <SafeAreaView>
        <View>
            <View>
            {children}
            </View>
        </View>
        </SafeAreaView>
    );
};
