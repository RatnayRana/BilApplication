import {ERPURLAPI} from './rolePermissionAPI';

interface RoleAndPermissionAttributes {
  itemName: string;
  username?: string;
}

export const RoleAndPermission = ({
  itemName,
  username,
}: RoleAndPermissionAttributes) => {
  // return new Promise(async (resolve, reject) => {
  try {
    if (itemName === 'ERP') {
      return ERPURLAPI(username);

      // } else if (itemName === 'HR') {
      //   // If itemName is 'HR', call the HR-related APIs
      //   const result1 = await HRAPI1(itemName);
      //   const result2 = await HRAPI2(itemName);
      //   result = { result1, result2 };
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
