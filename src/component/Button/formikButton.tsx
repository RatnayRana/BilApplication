import { memo } from 'react';
import { View } from 'react-native';
import { AuthButtonProps } from '../../interface/auth/auth.interface';
import Button from '../../component/Button';

export const FormikButton = memo(
  ({title, onPress, isLoading, buttonStyle,labelButtonstyle}: AuthButtonProps) => (
    <View style={buttonStyle}>
    <Button title={isLoading ? '...' : title} onPress={onPress} style ={buttonStyle} labelStyle={labelButtonstyle}/>
    </View>
  ),
);
