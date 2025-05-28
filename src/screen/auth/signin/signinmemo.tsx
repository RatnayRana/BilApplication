import React from 'react';
import { Formik } from 'formik';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import Input from '../../../component/input';
import { FormikButton } from '../../../component/Button/formikButton';
import { validationSignSchema } from '../validation/signIn.validation';
import {
  AuthAttributes,
  AuthField,
  AuthForm,
} from '../../../interface/auth/auth.interface';

const AuthError = ({ error }: { error: string | unknown }) => {
  if (!error) {
    return null;
  }
  return (
    <Text style={{ color: 'red', marginBottom: 10 }}>{error as string}</Text>
  );
};
const FormikForm = ({
  onSubmit,
  isLoading,
  labelStyle,
  placeholderStyle,
  inputStyle,
  buttonStyle,
  labelButtonstyle,
  form,
}: AuthForm) => {
  const initialValues = form.reduce((acc: AuthAttributes, field: AuthField) => {
    acc[field.name] = '';
    return acc;
  }, {} as AuthAttributes);

  return (
    <Formik
      validationSchema={validationSignSchema}
      initialValues={initialValues}
      onSubmit={values => onSubmit(values)}>
      {({ handleChange, values, errors, touched, handleSubmit }) => (
        <ScrollView>
          {/* Dynamically render form fields */}
          {form.map(field => (
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              key={(field.name)}
            >
              <View >
                <Input
                  placeholderStyle={placeholderStyle}
                  inputstyle={inputStyle}
                  labelStyle={labelStyle}
                  icon={field.icon}
                  size={35}
                  label={field.label}
                  placeholder={field.placeholder}
                  value={values[field.name] || ''}
                  onChangeText={handleChange(field.name) || (() => { })}
                  isPassword={field.isPassword}
                />
                {/* Show validation error if field is touched and has an error */}
                {touched[field.name] && errors[field.name] && (
                  <AuthError error={errors[field.name]} />
                )}
              </View>
            </KeyboardAvoidingView>

          ))}

          <FormikButton
            buttonStyle={buttonStyle}
            labelButtonstyle={labelButtonstyle}
            title="Submit"
            onPress={handleSubmit}
            isLoading={isLoading}
          />
        </ScrollView>
      )}
    </Formik>
  );
};

export default FormikForm;
