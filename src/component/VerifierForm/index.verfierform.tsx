import {View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '../../component/CheckBox/Index.checkbox';
import Label from '../Label/index.label';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './style.verfierform';
import {VerificationFormProps} from '../../public/utility/data/verificationdata';

const VerificationForm: React.FC<VerificationFormProps> = ({
  onSubmit,
  dropdownData,
  title = '',
  placeholder,
  Dropdownname = '',
}) => {
  const [selection, setSelection] = useState<'yes' | 'no' | null>(null);
  const [selectedVerifier, setSelectedVerifier] = useState('');

  const handleYesCheck = (value: boolean) => {
    if (value) {
      setSelection('yes');
      setSelectedVerifier(''); // Set to 'yes' if checked
    } else {
      setSelection(null); // Set to null if unchecked
    }
  };

  const handleNoCheck = (value: boolean) => {
    if (value) {
      setSelection('no'); // Set to 'no' if checked
      setSelectedVerifier(''); // Reset verifier when No is selected
    } else {
      setSelection(null); // Set to null if unchecked
    }
  };
  return (
    <View>
      <View style={styles.checkbox}>
        <Label text={title} style={styles.traveltype} />

        <View style={styles.check}>
          <CheckBox
            initialValue={selection === 'yes'}
            onValueChange={handleYesCheck}
            label="Yes"
          />
          <CheckBox
            label="No"
            initialValue={selection === 'no'}
            onValueChange={handleNoCheck}
          />
        </View>
      </View>

      <View style={styles.DateContainer}>
        <Label text={Dropdownname} style={styles.traveltype} />
        <Dropdown
          style={[
            styles.dropdown,
            (selection === 'no' || selection === null) &&
              styles.dropdownDisabled,
          ]}
          data={selection === 'yes' ? dropdownData : []}
          value={selectedVerifier}
          onChange={item => {
            if (selection !== 'no') {
              setSelectedVerifier(item.value);
              if (onSubmit) {
                onSubmit({isVerified: true, verifier: item.value});
              }
            }
          }}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          placeholderStyle={styles.placeholder}
        />
      </View>
    </View>
  );
};

export default VerificationForm;
