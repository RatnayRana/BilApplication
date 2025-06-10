
import { jwtDecode } from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';

export interface TokenAttributes {
  email: string;
  name: string;
  employee_id: string;
  employee_code: string;
}

export const tokenMiddleware = async ():Promise<TokenAttributes | undefined>=> {
  try {
    const data = await EncryptedStorage.getItem('accessToken');

    if(!data){
      return undefined;
    }
    if (data) {
      const decoded: any = jwtDecode(data);

     const TokenData :TokenAttributes = {
      email: decoded?.email || 'Email not found',
      name: decoded?.name || 'Name not found',
      employee_id: decoded?.employee_id || 'Employee ID not found',
      employee_code: decoded?.employee_code || 'Employee Code not found',
     };
     return TokenData;

    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};
