// import {ShiftCreationAttributes} from '../../interface/ERP/leavetypes';

// // Make sure leaveTypes is definitely an array before using it
// export const formConfig = (leaveTypes: ShiftCreationAttributes) => {
  
//   return [
//     {
//       type: 'displaytext',
//       label: 'From Date',
//       name: 'leave_from_date',
//       value: 'leaveData.branch_name',
//     },
//     {
//       type: 'displaytext',
//       label: 'To Date',
//       name: 'leave_to_date',
//       value: 'leaveData.branch_name',
//     },
//     {
//       type: 'dropdown',
//       label: 'Status',
//       name: 'status_name',
//       data: Array.isArray(leaveTypes?.data)
//         ? leaveTypes.data.map(item => ({
//             label: item.name, // Assuming each item has a `name` field
//             value: item.id, // Assuming each item has an `id` field
//           }))
//         : [],
//       placeholder: 'Select Leave Type',
//     },
//     {
//       type: 'text',
//       label: 'Reason',
//       name: 'leave_reason',
//       placeholder: 'Enter reason for leave',
//     },
//   ];
// };
