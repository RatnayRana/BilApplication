
export const ERPURLAPI = process.env.ERPAPIURL;
export const AUTHAPIURL = process.env.AUTHAPIURL;
export const ERPURL = {
    login: `${AUTHAPIURL}/login`,
    leaveType: `${ERPURLAPI}/leaveTypesQuery`,
    createleave:`${ERPURLAPI}/createleave`,
    leaveQueryApproval: `${ERPURLAPI}/leaveQueryApproval`,
    permission: `${ERPURLAPI}/permission`,
    approvedLeave:`${ERPURLAPI}/approvedLeave`,
    createtravel:`${ERPURLAPI}/createtravel`,
    travelTypesQuery:`${ERPURLAPI}/travelTypesQuery`
    // leaveApplication: 'leave-applications',
};
