import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
  leave_type: Yup.string().required('Leave type is required'),
  leave_from_date: Yup.string().required('Start date is required'),
  leave_to_date: Yup.string().required('End date is required'),
  leave_reason: Yup.string().required('Reason is required'),
  leave_day_shift: Yup.string().required('Leave Day Shift is required'),
  });
