import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CheckboxProps {
  label?: string;
  initialValue?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: StyleProp<TextStyle>;
  iconSize?: number;
  iconColor?: string;
  iconStyle?: ViewStyle;

}

const Checkbox: React.FC<CheckboxProps> = ({
  iconStyle,
  label,
  initialValue = 'no', // Default to 'no' if no value is passed
  onValueChange,
  disabled = false,
  containerStyle,
  labelStyle,
  iconSize = 30,
  iconColor = "rgb(37, 99, 235)"
}) => {
  const handlePress = () => {
    if (!disabled) {
      const newValue = initialValue === true ? false : true;
      onValueChange?.(newValue); 
    }
  };
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}>
      <Text style={[ disabled && styles.disabledText, labelStyle]}>
        {label}
      </Text>
      <Icon
        style={iconStyle}
        name={initialValue ? 'check-box' : 'check-box-outline-blank'}
        size={iconSize}
        color={disabled ? "rgb(37, 99, 235)" : iconColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  label: {
    fontSize: 20,
    color: '#000000',
  },
  disabledText: {
    color: '#999999',
  },
});

export default Checkbox;
