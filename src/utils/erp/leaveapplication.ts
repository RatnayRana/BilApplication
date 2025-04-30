import {  LeaveTypeResponseAttributes, ShiftCreationAttributes} from '../../interface/ERP/leavetypes';

// Make sure leaveTypes is definitely an array before using it
export const formConfig = (
  leaveTypes: LeaveTypeResponseAttributes,
  shiftTypes:ShiftCreationAttributes,
) => {

  // Ensure leaveTypes is an array
  return [
    {
      type: 'dropdown',
      label: 'Leave Type',
      name: 'leave_type',
      data:
        Array.isArray(leaveTypes?.data) ? leaveTypes.data.map(item => ({
          label: item.name, // Assuming each item has a `name` field
          value: item.id, // Assuming each item has an `id` field
        })) : [],
      placeholder: 'Select Leave Type',
    },
    {
      type: 'date',
      label: 'From Date',
      name: 'leave_from_date',
      placeholder: 'Select start date',
    },
    {
      type: 'date',
      label: 'To Date',
      name: 'leave_to_date',
      placeholder: 'Select end date',
    },
    {
      type: 'dropdown',
      label: 'Shift Type',
      name: 'leave_day_shift',
      data:
      Array.isArray(shiftTypes?.data) ? shiftTypes.data.map(item => ({
        label: item.name, // Assuming each item has a `name` field
        value: item.name, // Assuming each item has an `id` field
      })) : [],
      placeholder: 'Select shift type',
    },
    {
      type: 'checkbox',
      label: 'Half Day',
      name: 'leave_half_day',
    },
    {
      type: 'text',
      label: 'Reason',
      name: 'leave_reason',
      placeholder: 'Enter reason for leave',
    },
  ];
};

export const initialValues = {
  leave_type: '',
  leave_from_date: '',  
  leave_to_date: '',
  leave_day_shift: '',
  leave_half_day: false,
  leave_reason: '',
};
