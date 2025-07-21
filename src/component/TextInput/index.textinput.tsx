import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
  Text,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
} from 'react-native';
import Label from '../Label/index.label';

interface CustomTextInputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  required?: boolean;
  containerStyle?: StyleProp<TextStyle>;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  error,
  required = false,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  onFocus,
  onBlur,
  value,
  onChangeText,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const [localError, setLocalError] = React.useState<string | undefined>(error);

  // Validate input when value changes or component loses focus
  const validate = React.useCallback(() => {
    if (required && (!value || value.trim() === '')) {
      // setLocalError('This field is required');
      return false;
    }
    setLocalError(error);
    return true;
  }, [required, value, error]);

  // Handle input change
  const handleChangeText = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
    if (touched) {
      validate();
    }
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    setTouched(true);
    validate();
    onBlur?.(e);
  };

  return (
    <View style={containerStyle}>
      {label && (
        <View style={styles.labelContainer}>
          <Label text={label} style={labelStyle} />
          {required && <Text style={styles.requiredAsterisk}>*</Text>}
        </View>
      )}
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={handleChangeText}
        style={[
          inputStyle,
          isFocused && styles.focused,
          localError && styles.errorInput,
        ]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline={true}
        autoCorrect={true}
      />
      {localError && (
        <Text style={[styles.errorText, errorStyle]}>{localError}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  requiredAsterisk: {
    color: '#FF3B30',
    marginLeft: 4,
    fontSize: 16,
  },
  focused: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  errorInput: {
    borderColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomTextInput;
