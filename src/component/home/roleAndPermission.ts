import LeaveEncashApi from './LeaveEncashment/leaveEncashment';
import {ERPURLAPI} from './rolePermissionAPI';

interface RoleAndPermissionAttributes {
  itemName: string;
  username?: string;
  employee_code?:string
}

export const RoleAndPermission = ({
  itemName,
  username,
  employee_code
}: RoleAndPermissionAttributes) => {
  // return new Promise(async (resolve, reject) => {
  try {
    if (itemName === 'Approved Application') {
      return ERPURLAPI(username);

      } 
      
    else if (itemName === 'Leave Encashment') {
        // If itemName is 'HR', call the HR-related APIs
        return LeaveEncashApi(employee_code)
      // } else if (itemName === 'Finance') {
      //   // If itemName is 'Finance', call the Finance-related APIs
      //   const result1 = await FinanceAPI1(itemName);
      //   const result2 = await FinanceAPI2(itemName);
      //   result = { result1, result2 };
    } else {
      // Default case, you can handle it as needed
      throw new Error('Unknown itemName');
    }

    // resolve(result); // Resolve with the result
  } catch (error) {
    // reject(new Error('Error in API calls: ' + error)); // Reject if any of the API calls fail
    throw new Error('Error in API calls: ' + error);
  }
};
