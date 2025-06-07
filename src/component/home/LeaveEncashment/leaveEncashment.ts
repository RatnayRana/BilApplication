import {AxiosError} from 'axios';
import apiClient from '../../../post/postapi';
import {ERPURL} from '../../APIURL/ERP/erpurl';
import {CacheManager} from '../../../public/middleware/cacheManager/cachemanager';
import { errorResponse } from '../rolePermissionAPI';
export type LeaveCashmentData={
    employee_id: string;
  employee_name: string;
  basic_pay: number;
  financial_year: string;
  casual_leave_balance: string;
  earned_leave_balance: string;
  total_leave_balance: number
}
type ResponseCustom = {
  status: string;
  message: string;
  errorMessage?:string
  data:LeaveCashmentData
};

type errorResponseData = {
  errorMessage: string;
};
const cacheManager = new CacheManager();

type combinedResponse = ResponseCustom | errorResponse | errorResponseData;
// Example ERP-related API functions
export const LeaveEncashApi = async (
  employee_code?: string,
): Promise<combinedResponse> => {
  const Employee_Code = {employee_code: employee_code};
  try {
    employee_code = JSON.stringify(`erprolepermission${employee_code}`);
    if (cacheManager.has(employee_code)) {
      
      return cacheManager.get(employee_code)!;
    }

    
    
    const response = await apiClient.post(ERPURL.fetchLeaveEncashment, Employee_Code);
    const data = response?.data;
    if (data) {
    }
    const resultdata = {
      status: data.status,
      message: data.message,
      data:data.data
    } as ResponseCustom;

    cacheManager.set(employee_code,resultdata );
    return resultdata;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.error || 'error message';
      return {errorMessage};
    }
    return {errorMessage: 'unkown'};
  }
};

export default LeaveEncashApi;
