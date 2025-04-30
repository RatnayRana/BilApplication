import {  View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/color';

interface IWrapper {
    children: React.ReactNode; 
    // Correct type for children
}

const Wrapper: React.FC<IWrapper> = ({ children }: IWrapper) => {
    return (
        <View style={{backgroundColor:colors.white,flex:1}}>
            {/* header and logo */}
            {children}
        </View>
    );
};

export default Wrapper;
