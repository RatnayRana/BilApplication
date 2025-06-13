export const ERPURLAPI = process.env.APIERPURL;

export const ERPURL = {
  // Authentication
  login: `${ERPURLAPI}/login`,

  // Leave Management
  leaveType: `${ERPURLAPI}/erp/leaveTypesQuery`,
  createLeave: `${ERPURLAPI}/erp/createleave`,
  leaveQueryApproval: `${ERPURLAPI}/erp/leaveQueryApproval`,
  approvedLeave: `${ERPURLAPI}/erp/approvedLeave`,
  fetchLeaveEncashment: `${ERPURLAPI}/erp/fetchLeaveEncashment`,

  // Permission
  permission: `${ERPURLAPI}/erp/permission`,

  // Travel Management
  createTravel: `${ERPURLAPI}/erp/createtravel`,
  travelTypesQuery: `${ERPURLAPI}/erp/travelTypesQuery`,
  travelApprovalList: `${ERPURLAPI}/erp/travelApprovalList`,
  travelVerification: `${ERPURLAPI}/erp/travelVerification`,
  travelList: `${ERPURLAPI}/erp/travelList`,

  // Training Management
  trainingType: `${ERPURLAPI}/erp/trainingType`,
  trainingCategory: `${ERPURLAPI}/erp/trainingCategory`,
  fetchTrainingCountryFunding: `${ERPURLAPI}/erp/fetchTrainingCountryFunding`,
  createTraining: `${ERPURLAPI}/erp/createTraining`,
  trainingList: `${ERPURLAPI}/erp/traininglist`,
  fetchTrainingByCode: `${ERPURLAPI}/erp/fetchTrainingByCode`,
  trainingVerification: `${ERPURLAPI}/erp/trainingVerification`,

  // Salary Advance
  fetchAdvanceDetail: `${ERPURLAPI}/erp/fetchAdvancedetail`,
  applySalaryAdvance: `${ERPURLAPI}/erp/applySalaryAdvance`,
  fetchSalaryAdvance: `${ERPURLAPI}/erp/fetchSalaryAdvance`,
  approveSalaryAdvance: `${ERPURLAPI}/erp/approveSalaryAdvance`,

  //leave
  applyLeaveEncashment:`${ERPURLAPI}/erp/applyLeaveEncashment`,
  fetchApprovalLeaveEncashment:`${ERPURLAPI}/erp/fetchApprovalLeaveEncashment`,
  leaveEncashmentApprove:`${ERPURLAPI}/erp/leaveEncashmentApprove`,
};
