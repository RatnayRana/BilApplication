import React, { useState } from 'react';
import { Image, Pressable, StyleProp, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../utils/color';

export interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  isPassword: boolean;
  onChangeText: (text: string) => void;
  icon?: string;
  size?: number;
  style?: object;
  labelStyle: StyleProp<TextStyle>
  placeholderStyle?: StyleProp<TextStyle>
  inputstyle: StyleProp<ViewStyle>
}

const Input: React.FC<InputProps> = ({
  label,
  value,

  isPassword,
  onChangeText,
  icon,
  size,
  ...props
}) => {
  const { labelStyle, placeholder, placeholderStyle, inputstyle } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const onPressEye = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={labelStyle}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          value ? { borderColor: colors.primary } : { borderColor: 'gray' },
        ]}>
        {icon && <Icon name={icon} size={size} />}
        <TextInput
         placeholderTextColor="gray" 
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          style={[inputstyle, placeholderStyle]}
        />
       
        {isPassword ? (
          <Pressable onPress={onPressEye}>
            <Image
              style={[styles.eye]}
              source={
                isPasswordVisible
                  ? require('../../assets/eye.png')
                  : require('../../assets/eyeclose.png')
              }
            />
          </Pressable>
        ) :  <View style={{width:16,marginRight:23}}>
          
        </View>}
      </View>
    </View>
  );
};

export default Input;
