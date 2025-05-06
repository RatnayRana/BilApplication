import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Wrapper from '../../auth';
import { colors } from '../../../utils/color';
const PPF_Screen = () => {

 
  return (
    <Wrapper>
      
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:colors.black}}>Hy PPF Systen</Text>
          </View>
  
    </Wrapper>
  );
};

export default PPF_Screen;

