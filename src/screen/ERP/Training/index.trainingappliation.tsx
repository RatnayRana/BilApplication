import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {DateType} from 'react-native-ui-datepicker';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import NavComponent from '../../../component/NavComponent/navvomponent';
import Wrapper from '../../auth';
import {Formik} from 'formik';
import {
  initialValues,
  TrainingRequestForm,
} from '../../../utils/erp/trainingapplication';
import {validationtrainingSchema} from '../../auth/validation/signIn.validation';
import {renderField} from '../../../public/customfields/custom.fields';
import {
  Source_Of_Funding,
  TraingingType,
  TrainingCategory,
} from '../../../public/utility/data/trainingdata';
import Button from '../../../component/Button';
import {Country} from '../../../interface/ERP/trainingtypes';
import {styles} from '../LeaveApplicationPage/style.leaveapplicationpage';
import trainingStyles from './style.trainingapplication';
dayjs.extend(utc);

const TrainingApplicationScreen: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const ConditionalFieldConfig = [
    {
      targetField: 'travel_advance_amount',
      dependsOn: 'need_advance', // Field that controls the target
      condition: (value: boolean) => value === true, // Function that determines if target is enabled
    },
  ];
  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name')
      .then(response => response.json())
      .then(data => {
        const mappedCountries: Country[] = data.map(
          (item: {name: string}, index: number) => ({
            id: index + 1,
            name: item.name,
          }),
        );
        const countryData: Country[] = [
          {id: 0, name: 'Select the Country'},
          ...mappedCountries,
        ];
        setCountries(countryData);
      })

      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <Wrapper>
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
        text="Training Request"
      />

      <ScrollView
        style={{paddingHorizontal: 16, flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={validationtrainingSchema}>
          {({handleSubmit, values, setFieldValue, errors, touched}) => {
            const handleDateChange = (date: DateType) => {
              const formattedDate = dayjs(date).format('YYYY-MM-DD');
              setStartDate(formattedDate);
              setFieldValue('training_from_date', formattedDate);
              setOpenStart(false);
            };

            const handleEndDateChange = (date: DateType) => {
              const formattedDate = dayjs(date).format('YYYY-MM-DD');
              setEndDate(formattedDate);
              setFieldValue('training_to_date', formattedDate);
              setOpenEnd(false);
            };

            return (
              <View>
                {TrainingRequestForm(
                  {data: TraingingType},
                  {data: TrainingCategory},
                  {data: countries},
                  {data: Source_Of_Funding},
                ).map((fieldConfig: any, index) => (
                  <View key={index}>
                    {renderField({
                      fieldConfig,
                      values,
                      setFieldValue: (name, value) =>
                        setFieldValue(name, value),
                      touched,
                      errors,
                      ConditionalFieldConfig,
                      setOpenStart,
                      openStart,
                      startDate,
                      handleDateChange,
                      setOpenEnd,
                      openEnd,
                      endDate,
                      startDateFieldName: 'training_from_date',
                      handleEndDateChange,
                      dropdownStyle: styles.dropdownStyle,
                      reasonTextStyle: trainingStyles.reasonStyle,
                      checkcontainerStyle: styles.checkconatinerStyle,
                      inputContainer: styles.containerInput,
                      textInputStyle: styles.textInputStyle,
                      placeholderStyle: styles.placeHolderStyle,
                      dateLabelStyle: styles.textInputStyle,
                    })}
                  </View>
                ))}
                <View style={styles.buttonContainer}>
                  <Button
                    title="Submit Application"
                    onPress={() => handleSubmit()}
                    style={styles.ButtonStyle}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </Wrapper>
  );
};

export default TrainingApplicationScreen;
