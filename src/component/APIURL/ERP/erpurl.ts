
export const ERPURLAPI = process.env.ERPAPIURL;
export const AUTHAPIURL = process.env.AUTHAPIURL;
export const ERPURL = {
    login: `${AUTHAPIURL}/login`,
    leaveType: `${ERPURLAPI}/leaveTypesQuery`,
    createleave: `${ERPURLAPI}/createleave`,
    leaveQueryApproval: `${ERPURLAPI}/leaveQueryApproval`,
    permission: `${ERPURLAPI}/permission`,
    approvedLeave: `${ERPURLAPI}/approvedLeave`,
    createtravel: `${ERPURLAPI}/createtravel`,
    travelTypesQuery: `${ERPURLAPI}/travelTypesQuery`,
    travelApprovalList: `${ERPURLAPI}/travelApprovalList`,
    travelVerification: `${ERPURLAPI}/travelVerification`,
    trainingType: `${ERPURLAPI}/trainingType`,
    trainingCategory: `${ERPURLAPI}/trainingCategory`,
    fetchTrainingCountryFunding: `${ERPURLAPI}/fetchTrainingCountryFunding`,
    createTraining: `${ERPURLAPI}/createTraining`,
    traininglist: `${ERPURLAPI}/traininglist`,
    fetchTrainingByCode: `${ERPURLAPI}/fetchTrainingByCode`,
    trainingVerification: `${ERPURLAPI}/trainingVerification`,
    travelList: `${ERPURLAPI}/travelList`,
    fetchAdvancedetail: `${ERPURLAPI}/fetchAdvancedetail`,


    // leaveApplication: 'leave-applications',
};
