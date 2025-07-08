/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Wrapper from '../../auth';
import { colors } from '../../../utils/color';
import NavComponent from '../../../component/NavComponent/navvomponent';
import { styles } from '../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomTextInput from '../../../component/TextInput/index.textinput';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { renderField } from '../../../public/customfields/custom.fields';
import { TravelRequestForm } from '../../../utils/erp/travelapplication';
import { validationtravelSchema } from '../../auth/validation/signIn.validation';
import travelStyles from '../TravelApplicationScreen/style.travelapplication';
import { SearchRequestForm, searchRequestInitialValues } from '../../../utils/ims/search-request-form';
import Button from '../../../component/Button';
import PolicyTypes from '../../../public/utility/ims/type-policy';
import lmsandisStyles from '../../calcultor/listyle';
const SearchApplication = () => {
  const [inputValue, setInputValue] = useState('');
  const ConditionalFieldConfig = [
    {
      targetField: 'claim_number',
      dependsOn: 'policy_type',  // lowercase
      condition: (value: string) => value === 'Claim Search',
    },
    {
      targetField: 'policy_number',
      dependsOn: 'policy_type',  // lowercase
      condition: (value: string) => value === 'Policy Search',
    },
  ];

  const onFormSubmit = (values: any) => {
    console.log(values)
  };

  return (
    <Wrapper >
      <NavComponent
        size={35}
        container1Style={styles.container1}
        headercontainerStyle={styles.headercontainer}
        subcontainerStyle={{}}
        width={24}
        backIcon={'chevron-back-sharp'}
        height={24}
        imageStyle={styles.imagev}
        textSytle={styles.text}
        text="Insurance Search"
      />
      <ScrollView style={{ paddingHorizontal: 16, flexGrow: 1 }}>
        <Formik
          initialValues={searchRequestInitialValues}
          validationSchema={validationtravelSchema}
          onSubmit={onFormSubmit}>
          {({ handleSubmit, values, setFieldValue, errors, touched }) => {

            return (
              <View>
                {SearchRequestForm(
                  { data: PolicyTypes }
                ).map((fieldConfig: any, index) => {
                  return (
                    <View key={index}>
                      {renderField({
                        fieldConfig,
                        values,
                        setFieldValue: (name, value) =>
                          setFieldValue(name, value),
                        touched,
                        errors,
                        ConditionalFieldConfig,
                        dropdownStyle: styles.dropdownStyle,
                        reasonTextStyle: lmsandisStyles.reasonStyle, checkcontainerStyle: styles.checkconatinerStyle,
                        inputContainer: styles.containerInput,
                        textInputStyle: styles.textInputStyle,
                        placeholderStyle: styles.placeHolderStyle,
                        dateLabelStyle: styles.textInputStyle,
                      })}
                    </View>
                  );
                })}
                <View style={styles.buttonContainer}>
                  <Button
                    title="Search"
                    onPress={() => {
                      handleSubmit();
                    }}
                    style={styles.ButtonStyle}
                    labelStyle={styles.buttonTextStyle}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
      {/* 
      <View style={{
        paddingHorizontal: 16,
        marginTop: 20,
      }}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          borderRadius: 12,
          marginBottom: 9, shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
          elevation: 4,
          height: 60,
          padding: 20,
        }}>
          {/* Replace 'Search' with the actual icon name if different */}

      {/* <TextInput
            style={Trailstyles.input} // Apply custom styles
            onChangeText={setInputValue} // Update the state when text changes
            value={inputValue} // Display the current state value
            placeholder="Enter text here" // Optional: hint text
            // keyboardType="default" // Optional: specify keyboard type (e.g., "numeric", "email-address")
            // secureTextEntry={false} // Optional: hide text for passwords
          />
          <TouchableOpacity style={{
            position: 'absolute',
            right: 1,
            backgroundColor: colors.primary,
            borderRadius: 12,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            elevation: 4,
            height: 60,
            padding: 12,
          }}>

            <FontAwesome name="search" size={32} color={colors.white} />
          </TouchableOpacity>


      //   </View>
      // </View> */}

    </Wrapper>
  );
};

export default SearchApplication;

const Trailstyles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    height: 60,
    backgroundColor: '#fff'
  },
});
