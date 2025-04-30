import {useState} from 'react';
import CustomDropdownProps from '../interface/dropdown.interface';
import {Text, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './style.dropdown';

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  data,
  placeholder = 'Select item',
  labelField = 'label',
  valueField = 'value',
  onChange,
  style,
  containerStyle,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleChange = (item: any) => {
    setValue(item[valueField]);
    setIsFocus(false);
    onChange(item);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Dropdown
        style={[styles.dropdown, isFocus && styles.focusedDropdown, style]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField={labelField}
        valueField={valueField}
        placeholder={!isFocus ? placeholder : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleChange}
        renderItem={item => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handleChange(item)}>
            <Text style={styles.textItem}>{item[labelField]}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CustomDropdown;
