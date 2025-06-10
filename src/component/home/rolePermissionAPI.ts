import {AxiosError} from 'axios';
import apiClient from '../../post/postapi';
import {ERPURL} from '../APIURL/ERP/erpurl';
import {CacheManager} from '../../public/middleware/cacheManager/cachemanager';

type ResponseCustom = {
  status: string;
  message: string;
  // errorMessage?:string
  roles: string[];
  permission: string[];
    errorMessage?:string

};

export type errorResponse = {
  errorMessage: string;
};

// Add a new type that includes errorMessage for ResponseCustom when needed
export type errorResponseData = {
  errorMessage: string;
};
const cacheManager = new CacheManager();

type combinedResponse = ResponseCustom | errorResponse | errorResponseData;
// Example ERP-related API functions
export const ERPURLAPI = async (
  username?: string,
): Promise<combinedResponse> => {
  const UserName = {username: username};
  console.log("Username",UserName)
  try {
    username = JSON.stringify(`erprolepermission${username}`);
    if (cacheManager.has(username)) {
      
      return cacheManager.get(username)!;
    }

    
    
    const response = await apiClient.post(ERPURL.permission, UserName);
    const data = response?.data;
    if (data) {
    }
    const resultdata = {
      status: data.status,
      message: data.message,
      roles: data.data.role,
      permission: data.data.permission,
    } as ResponseCustom;
    console.log("bonG tAMANF ",resultdata)
    cacheManager.set(username,resultdata );
    return resultdata;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.error || 'error message';
      return {errorMessage};
    }
    return {errorMessage: 'unkown'};
  }
};

export default ERPURLAPI;
