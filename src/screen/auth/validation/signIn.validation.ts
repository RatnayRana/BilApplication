import * as Yup from 'yup';

export const validationSignSchema = Yup.object().shape({
  username: Yup.string().required('Name is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 8 characters long'), // Add minimum length for the password
});
export const validationSchema = Yup.object().shape({
  leave_type: Yup.string().required('Leave type is required'),
  leave_from_date: Yup.string().required('Start date is required'),
  leave_to_date: Yup.string().required('End date is required'),
  leave_reason: Yup.string().required('Reason is required'),
});
export const validationtravelSchema = Yup.object().shape({
  travel_type: Yup.string().required('Travel type is required'),
  travel_purpose: Yup.string().required('Travel purpose is required'),
  travel_funding: Yup.string().required('Travel funding is required'),
  travel_mode: Yup.string().required('Travel mode is required'),
  travel_from_date: Yup.string().required('Start date is required'),
  travel_to_date: Yup.string().required('End date is required'),
  travel_description: Yup.string().required('Travel description is required'),

  travel_from_place: Yup.string().required('Travel from place is required'),
  travel_to_place: Yup.string().required('Travel to place is required'),
});
export const validationtrainingSchema = Yup.object().shape({
  training_type: Yup.string().required('Training type is required'),
  training_category: Yup.string().required('Training Category is required'),
  // training_course: Yup.string().required('Training course is required'),
  training_country: Yup.string().required('Country description is required'),

  training_description: Yup.string().required('Description is required'),

});
export const validationSalaryAdvanceSchema = Yup.object().shape({
  applicable_advance_amt: Yup.number().required('Advance Amount is required'),
  salary_purpose: Yup.string().required(' Salary Purpose is required'),


});

export const leave_encash_validation = Yup.object().shape({
  basic_pay: Yup.number().required('basic_pay is required'),
  earned_leave_balance: Yup.string().required(' Earned Leave Balance is required'),


});
