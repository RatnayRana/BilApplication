/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Wrapper from '../../auth';
import NavComponent from '../../../component/NavComponent/navvomponent';
import { styles } from '../../ERP/LeaveApplicationPage/style.leaveapplicationpage';
import { Formik } from 'formik';
import { renderField } from '../../../public/customfields/custom.fields';
import { SearchRequestForm, searchRequestInitialValues } from '../../../utils/ims/search-request-form';
import Button from '../../../component/Button';
import lmsandisStyles from '../../calcultor/listyle';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import apiClient from '../../../post/postapi';

import { useNavigation, NavigationProp } from '@react-navigation/core';
import { RootStackNavigatorParamsList } from '../../../component/interface/routeinterface';
import CustomDialog from '../../../component/DialogBox/dialogbox';
import LoaderCompoment from '../../../component/Loader/index.loader';
import { PolicyOptions, PolicyTypes } from '../../../public/utility/ims/type-policy';

interface PolicySearchAttributes {
  policy_number?: string;
  vechile_reg_number?: string;
  cid_number?: string;
  policy_type?: string;
}

export interface PolicyDetailResponse {
  status: number;
  message: string;
  data: {
    success: boolean;
    status: number;
    message: string;
    detail: PolicyDetail[];
  };
}

export interface PolicyDetail {
  training_end_date: Date | undefined;
  training_description: string | undefined;
  training_status: any;
  training_from_date: Date | undefined;
  party_name: string;
  cid_no: string;
  policy_lob_id: number;
  pol_policy_number: string;
  lob_name: string;
  product_name: string;
  cover_name: string;
  total_sum_insured: string;
  total_premium: string;
  total_premium_due: string;
  start_date: string;
  expiry_date: string;
  total_renewal_sum_insured: string;
  total_renewal_premium: string;
  thram_no: string | null;
  plot_no: string | null;
  house_no: string | null;
  exact_location: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_no: string;
  engine_no: string;
  chassis_no: string;
  contact_no: string;

  lobname?: string;
  policy_number?: string;
  partyname?: string | undefined;
  cidno?: string;
  claimnumber?: string;
  intimationdate?: string;
  claimstatus?: string;
  total_claim_amount?: string;
  vehmake?: string;
  vehmodel?: string;
  vehregnumber?: string;
  vehengnumber?: string;
  vehchasnumber?: string;
}

const SearchApplication = () => {
  const navigation = useNavigation<NavigationProp<RootStackNavigatorParamsList>>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [serverError, setServerError] = useState(false);

  const ConditionalFieldConfig = [
    // {
    //   targetField: 'policy_type',
    //   dependsOn: 'policy_options',
    //   condition: (value: string) => value === 'Claim Search',
    // },
    {
      targetField: 'policy_number',
      dependsOn: 'policy_options',
      condition: (value: string) => value === 'Policy Number',
    },
    {
      targetField: 'vehicle_reg_number',
      dependsOn: 'policy_options',
      condition: (value: string) => value === 'Vehicle Number',
    },
    {
      targetField: 'claim_number',
      dependsOn: 'policy_options',
      condition: (value: string) => value === 'Claim Number',
    },
    {
      targetField: 'cid_number',
      dependsOn: 'policy_options',
      condition: (value: string) => value === 'Cid Number',
    },

  ];

  const {
    mutateAsync,
    isPending,
    data: searchData,
  } = useMutation({
    mutationFn: async (credentials: PolicySearchAttributes) => {
      let api;
      if (credentials.policy_type === 'Claim Search') {
        api = 'claimsearch';
      } else {
        api = 'policysearch';
      }
      console.log('api', api)
      const response = await apiClient.post<PolicyDetailResponse>(
        `http://172.16.16.195:4000/api/v1/ims/${api}`,
        credentials
      );
      console.log('response', response)
      return response.data;
    },
    onSuccess: (data) => {
      setShowSuccessDialog(true); // Show success dialog
    },
    onError: (error: unknown) => {
      setErrorMessage((error as AxiosError)?.message ?? 'An unknown error occurred');
      setServerError(true);
    },
  });

  const handleSuccess = () => {
    setShowSuccessDialog(false);
    navigation.navigate('SearchDetailedScreen', {
      approvedData: searchData?.data?.detail ?? [],
    });
  };

  const onFormSubmit = (values: PolicySearchAttributes) => {
    const payload = {
      policy_number: values.policy_number,
      vechile_reg_number: values.vechile_reg_number,
      cid_number: values.cid_number,
      policy_type: values.policy_type,
    };
    console.log('payLoad', payload)
    setServerError(false);
    setErrorMessage(undefined);
    setShowSuccessDialog(false);

    mutateAsync(payload);
  };

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
        text="Insurance Search"
      />

      {/* Success Dialog */}
      {showSuccessDialog && (
        <CustomDialog
          message={searchData?.data.message || 'Search successful'}
          color="#0AA06E"
          iconColor="#0AA06E"
          iconName="sticker-check-outline"
          visible={showSuccessDialog}
          onClose={handleSuccess}
        />
      )}

      {/* Loader while fetching */}
      <LoaderCompoment isLoading={isPending} />

      <ScrollView style={{ paddingHorizontal: 16, flexGrow: 1 }}>
        <Formik<PolicySearchAttributes>
          initialValues={searchRequestInitialValues}
          onSubmit={onFormSubmit}
        >
          {({ handleSubmit, values, setFieldValue, errors, touched }) => (
            <View>
              {SearchRequestForm({ data: PolicyTypes }, {
    policy:
      values.policy_type === 'Claim Search'
        ? PolicyOptions.filter(opt => ['Claim Number', 'Policy Number','Cid Number', 'Vehicle Number'].includes(opt.label))
        : values.policy_type === 'Policy Search'
        ? PolicyOptions.filter(opt => ['Policy Number', 'Vehicle Number', 'Cid Number'].includes(opt.label))
        : []
  }).map((fieldConfig: any, index) => (
                <View key={index}>
                  {renderField({
                    fieldConfig,
                    values,
                    setFieldValue: (name, value) => setFieldValue(name, value),
                    touched,
                    errors,
                    ConditionalFieldConfig,
                    dropdownStyle: styles.dropdownStyle,
                    reasonTextStyle: lmsandisStyles.reasonStyle,
                    checkcontainerStyle: styles.checkconatinerStyle,
                    inputContainer: styles.containerInput,
                    textInputStyle: styles.textInputStyle,
                    placeholderStyle: styles.placeHolderStyle,
                  })}
                </View>
              ))}
              <View style={styles.buttonContainer}>
                <Button
                  title="Search"
                  onPress={() => handleSubmit()}
                  style={styles.ButtonStyle}
                  labelStyle={styles.buttonTextStyle}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </Wrapper>
  );
};

export default SearchApplication;
