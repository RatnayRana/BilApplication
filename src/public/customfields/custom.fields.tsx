import React from 'react';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import Label from '../../component/Label/index.label';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import CheckBox from '../../component/CheckBox/Index.checkbox';
import CustomTextInput from '../../component/TextInput/index.textinput';
import { styles } from './custom.style';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/AntDesign'; // Added missing import
import MultiDatePicker from '../../component/Date';
import { DateType } from 'react-native-ui-datepicker';
import { colors } from '../../utils/color';

interface DropdownItem {
  label: string;
  value: string;
}

interface FieldConfig {
  type: string;
  label: string;
  name: string;
  data?: DropdownItem[];
  placeholder?: string;
  values?: any;
  multiple?: boolean
}
interface ConditionalFieldConfig {
  targetField: string;
  dependsOn: string;
  condition: (value: boolean) => boolean;
}

interface customInputFields {
  dropdownStyle?: StyleProp<ViewStyle>;
  reasonTextStyle?: TextStyle;
  placeholderStyle?: StyleProp<TextStyle>; // Change from placeHolderStyle to placeholderStyle
  dateLabelStyle?: TextStyle;
  DisplayView?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  fieldConfig: FieldConfig;
  inputContainer?: StyleProp<ViewStyle>;
  values: { [key: string]: any };
  setFieldValue?: (key: string, value: any | any[]) => void;
  touched: { [key: string]: any };
  errors: { [key: string]: any };
  setOpenStart?: (value: boolean) => void;
  openStart?: boolean;
  startDate?: string | null;
  handleDateChange?: (date: DateType) => void;
  handleOnPress?: () => void; // Added missing property
  setOpenEnd?: (value: boolean) => void;
  openEnd?: boolean;
  endDate?: string | null;
  handleEndDateChange?: (date: DateType) => void;
  checkcontainerStyle?: ViewStyle;
  onValueChange?: (value: boolean) => void;
  ConditionalFieldConfig?: ConditionalFieldConfig[];
  startDateFieldName?: string;
}

export const renderField = ({
  textInputStyle,
  fieldConfig,
  values,
  setFieldValue,
  touched,
  errors,
  setOpenStart,
  openStart = false,
  startDate,
  handleDateChange,
  setOpenEnd,
  openEnd = false,
  endDate,
  handleEndDateChange,
  DisplayView,
  dropdownStyle,
  reasonTextStyle,
  checkcontainerStyle,
  ConditionalFieldConfig = [],
  startDateFieldName,
  inputContainer,
  placeholderStyle,// Change from placeHolderStyle to placeholderStyle,
  dateLabelStyle,
}: customInputFields) => {
  const isFieldVisible = () => {
    if (!ConditionalFieldConfig || ConditionalFieldConfig.length === 0) {
      return false;
    }
    const condition = ConditionalFieldConfig.find(
      c => c.targetField === fieldConfig.name
    )
    if (!condition) {
      return false
    }
    return !condition.condition(values[condition.dependsOn])
  }
  // const isFieldDisabled = () => {
  //   if (!ConditionalFieldConfig || ConditionalFieldConfig.length === 0)
  //     return false;
  //   const condition = ConditionalFieldConfig.find(
  //     c => c.targetField === fieldConfig.name,
  //   );
  //   if (!condition) {
  //     return false;
  //   }

  //   return !condition.condition(values[condition.dependsOn]);
  // };
  // const disabled = isFieldDisabled();
  const visible = isFieldVisible()
  if (visible) {
    return null
  }

  switch (fieldConfig.type) {
    case 'dropdown':
      return (
        <>
          <Label text={fieldConfig.label} style={textInputStyle} />
          <Dropdown
            placeholderStyle={placeholderStyle} // This is correct, the prop name should be lowercase 'h'
            style={dropdownStyle}
            data={fieldConfig.data || []}
            onChange={(item: any) =>
              setFieldValue?.(fieldConfig.name, item.value)
            }
            labelField="label"
            valueField="value"
            placeholder={fieldConfig.placeholder}
            value={values[fieldConfig.name]}

          />
          {touched[fieldConfig.name] && errors[fieldConfig.name] && (
            <Text style={styles.errorText}>{errors[fieldConfig.name]}</Text>
          )}
        </>
      );
    // Updated MultiSelect case in renderField function
    case 'MultiSelect':
      return (
        <>
          <Label text={fieldConfig.label} style={textInputStyle} />
          <MultiSelect
            style={dropdownStyle}
            data={fieldConfig.data || []}
            placeholderStyle={placeholderStyle}
            labelField="label"
            valueField="value"
            value={values[fieldConfig.name] || []} // Ensure it's an array but not nested
            placeholder={fieldConfig.placeholder}
            mode="default"
            onChange={(items) => {
              // Directly use the items array as it already contains the selected values
              setFieldValue?.(fieldConfig.name, items);
            }}
            renderSelectedItem={(item, unSelect) => (
              <View style={styles.selectedItemContainer}>
                <Text style={styles.selectedItemText}>{item.label}</Text>
                <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                  <Icon name="close" size={16} color={colors.white} />
                </TouchableOpacity>
              </View>
            )}
          />
          {touched[fieldConfig.name] && errors[fieldConfig.name] && (
            <Text style={styles.errorText}>{errors[fieldConfig.name]}</Text>
          )}
        </>
      );

    case 'date':
      // Determine if this is a start date or end date field
      const isStartDate = fieldConfig.name === startDateFieldName;
      const dateLabel =
        fieldConfig.label || (isStartDate ? 'From Date' : 'To Date');
      const dateValue = isStartDate ? startDate : endDate;
      const dateVisible = isStartDate ? openStart : openEnd;
      const setDateVisible = isStartDate ? setOpenStart : setOpenEnd;
      const onDateChange = isStartDate ? handleDateChange : handleEndDateChange;

      const onPressDate = () => {
        if (setDateVisible) {
          setDateVisible(true);
        }
      };

      const onCloseModal = () => {
        if (setDateVisible) {
          setDateVisible(false);
        }
      };

      return (
        <>
          <View style={styles.DateContainer}>
            <Label text={dateLabel} style={dateLabelStyle} />
            <View style={styles.container2}>
              <TouchableOpacity
                onPress={onPressDate}
                style={styles.dateContainer}>
                <Text style={placeholderStyle}>
                  {values[fieldConfig.name]
                    ? dayjs(values[fieldConfig.name]).format('YYYY-MM-DD')
                    : fieldConfig.placeholder}
                </Text>
                <Icon name="calendar" size={30} color={colors.primary} />
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={dateVisible}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    {onDateChange && (
                      <MultiDatePicker
                        onChange={onDateChange}
                        initialDate={
                          values[fieldConfig.name]
                            ? new Date(values[fieldConfig.name])
                            : dateValue
                        }
                      />
                    )}
                    <TouchableOpacity onPress={onCloseModal}>
                      <Text>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
            {touched[fieldConfig.name] && errors[fieldConfig.name] && (
              <Text style={styles.errorText}>{errors[fieldConfig.name]}</Text>
            )}
          </View>
        </>
      );
    case 'checkbox':
      return (
        <>
          <CheckBox
            labelStyle={textInputStyle}
            containerStyle={checkcontainerStyle}
            label={fieldConfig.label}
            initialValue={values[fieldConfig.name]}
            onValueChange={value => setFieldValue?.(fieldConfig.name, value)}
          />
        </>
      );
    case 'text':
      return (
        <>
          <Label text={fieldConfig.label} style={textInputStyle} />
          <CustomTextInput
            required={true}
            containerStyle={inputContainer}
            inputStyle={reasonTextStyle}
            onChangeText={text =>

              setFieldValue?.(fieldConfig.name, text)
            }
            value={values[fieldConfig.name]}
          />
          {touched[fieldConfig.name] && errors[fieldConfig.name] && (
            <Text style={styles.errorText}>{errors[fieldConfig.name]}</Text>
          )}
        </>
      );
    case 'displaytext':
      return (
        <>
          <Label text={fieldConfig.label} style={textInputStyle} />
          <View style={DisplayView}>
            <Label
              text={values[fieldConfig.name] || '0'}
              style={styles.textStyle}
            />
          </View>

          {touched[fieldConfig.name] && errors[fieldConfig.name] && (
            <Text style={styles.errorText}>{errors[fieldConfig.name]}</Text>
          )}
        </>
      );

    default:
      return null;
  }
};
