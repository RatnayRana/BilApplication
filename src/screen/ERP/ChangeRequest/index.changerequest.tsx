import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';

import {LeaveTypeData} from '../../../public/utility/data/leavetypedata';
import Button from '../../../component/Button';


import styles from './style.changerequest';
import ImageComponent from '../../../component/Image/index.image';
import TextCompoment from '../../../component/TextComponent/index.text';
import Label from '../../../component/Label/index.label';
import {Dropdown} from 'react-native-element-dropdown';
import CustomTextInput from '../../../component/TextInput/index.textinput';
import FileUpload from '../../../component/FileUpload/index.fileupload';
import VerificationForm from '../../../component/VerifierForm/index.verfierform';



const ChangeRequestScreen: React.FC = () => {
  const dropdownData = LeaveTypeData.map(item => ({
    label: item.leavename,
    value: item.index,
  }));
  const handleFormSubmit = (data: { isVerified: boolean; verifier?: string }) => {
    console.log('Form data:', data);
    // Handle form submission
  };
  return (
    <View style={[styles.container, {flex: 1}]}>
      <View style={styles.container1}>
        <View style={styles.headercontainer}>
          <TouchableOpacity style={styles.subcontainer}>
            <ImageComponent
              imageSource={require('../../../assets/left-arrow.png')}
              width={24}
              height={24}
              style={styles.image}
            />
          </TouchableOpacity>
          <TextCompoment text="Request Details" style={styles.text} />
        </View>
      </View>

      <ScrollView style={[styles.formContainer, {flex: 1}]}>
        {/* Issue category */}

        <View>
          <Label text="Issue Category" style={styles.traveltype} />
          <Dropdown
            style={styles.dropdown}
            data={dropdownData}
            onChange={item => console.log(item)}
            labelField="label"
            valueField="value"
            placeholder="Select Issue"
            placeholderStyle={styles.placeholder}
          />
        </View>
        {/* Request Type */}

        <View>
          <Label text="Request Type" style={styles.traveltype} />
          <Dropdown
            style={styles.dropdown}
            data={dropdownData}
            onChange={item => console.log(item)}
            labelField="label"
            valueField="value"
            placeholder="Select Request Type"
            placeholderStyle={styles.placeholder}
          />
        </View>

        {/* Change category */}

        <View>
          <Label text="Change Category" style={styles.traveltype} />
          <Dropdown
            style={styles.dropdown}
            data={dropdownData}
            onChange={item => console.log(item)}
            labelField="label"
            valueField="value"
            placeholder="Select Change Category"
            placeholderStyle={styles.placeholder}
          />
        </View>

        {/* Priority Type */}

        <View>
          <Label text="Priority Type" style={styles.traveltype} />
          <Dropdown
            style={styles.dropdown}
            data={dropdownData}
            onChange={item => console.log(item)}
            labelField="label"
            valueField="value"
            placeholder="Select Priority Type"
            placeholderStyle={styles.placeholder}
          />
        </View>

        <View style={styles.DateContainer}>
          <Label text="Issue Description" style={styles.textStyle} />
          <CustomTextInput
            required={true}
            containerStyle={styles.textContainer}
            inputStyle={styles.ReasonContainer}
            onChangeText={text => console.log(text)}
            // Add any TextInput props as needed
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.DateContainer}>
          <Label text="Support Document" style={styles.textStyle} />

          <FileUpload containerStyle={styles.DateContainer} />
        </View>

        <View style={styles.DateContainer}>
          <Label text="Request Description" style={styles.textStyle} />
          <CustomTextInput
            required={true}
            containerStyle={styles.textContainer}
            inputStyle={styles.ReasonContainer}
            onChangeText={text => console.log(text)}
            // Add any TextInput props as needed
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.DateContainer}>
          <Label text="Impact Description" style={styles.textStyle} />
          <CustomTextInput
            required={true}
            containerStyle={styles.textContainer}
            inputStyle={styles.ReasonContainer}
            onChangeText={text => console.log(text)}
            // Add any TextInput props as needed
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <VerificationForm dropdownData={dropdownData} onSubmit={handleFormSubmit} title="Is verification Required?" Dropdownname="Verifier" placeholder="Select Verifier"/>
        <VerificationForm dropdownData={dropdownData} onSubmit={handleFormSubmit} title="Is Approval Required?" Dropdownname="Approver" placeholder="Select Approver"/>
        <VerificationForm dropdownData={dropdownData} onSubmit={handleFormSubmit} title="Is Level II Approval Required?" Dropdownname="Level II Approver" placeholder="Select Level II Approver"/>
        <VerificationForm dropdownData={dropdownData} onSubmit={handleFormSubmit} title="Is Counter Approval Required?" Dropdownname="Counter Approval" placeholder="Select Counter Approval"/>
        <VerificationForm dropdownData={dropdownData} onSubmit={handleFormSubmit} title="Task Assign To?" Dropdownname="Employees" placeholder="Select Employees"/>

        <View style={styles.buttonConatiner}>
          <Button
            title="Submit"
            onPress={() => console.log('Submitted')}
            style={styles.ButtonStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangeRequestScreen;
