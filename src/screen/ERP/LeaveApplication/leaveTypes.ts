import {useQuery} from '@tanstack/react-query';
import apiClient from '../../../post/postapi';
import {ERPURL} from '../../../component/APIURL/ERP/erpurl';
import {LeaveTypeResponse} from '../../../interface/ERP/leavetypes';
import {CacheManager} from '../../../public/middleware/cacheManager/cachemanager';

export const FetchLeaveTypes = () => {
  const cachemanager = new CacheManager();
  return useQuery<LeaveTypeResponse, Error>({
    queryKey: ['leaveTypes'],
    queryFn: async () => {
      try {
        const leavesType = JSON.stringify('leaveTypes');
        if (cachemanager.has(leavesType)) {
          console.log('hit');
          const cachedData = cachemanager.get(leavesType);

          if (cachedData) {
            return cachedData as LeaveTypeResponse; // ✅ Ensure cached data exists
          }
        }

        console.log('missed');
        const response = await apiClient.get<LeaveTypeResponse>(
          ERPURL.leaveType,
        );
        cachemanager.set(leavesType, response.data);
        return response.data;
    
      } catch (error) {
        throw error;
      }
    },
  });
};
export type EmployeeResponseLeave = {
  emp_employee_number: string;
  emp_full_name: string;
  branch_name: string;
  leave_emp_code: string;
  leave_id: number;
  leave_type_name: string;
  leave_total_days: string;
  leave_reason: string;
  status_name: string;
};
export type EmployeeCode = {
  employee_code: string;
};
