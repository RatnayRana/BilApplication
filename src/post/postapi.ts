import { useNavigation, NavigationProp } from '@react-navigation/core';
import axios from 'axios';
// import { jwtDecode } from "jwt-decode";
import EncryptedStorage from 'react-native-encrypted-storage';
import wretch from 'wretch';
import { RootStackNavigatorParamsList } from '../component/interface/routeinterface';
import { navigate } from './golbal/navigation-services';

// Create the axios instance without the token initially
const apiClient = axios.create({
  timeout: 5000, // 5 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});
apiClient.interceptors.request.use(
  async config => {
    try {
      const token = await EncryptedStorage.getItem('accessToken');

      if (token) {
        const cleanToken = token.replace(/"/g, '');
        // Set the Authorization header correctly
        config.headers.Authorization = `Bearer ${cleanToken}`;
      }
    } catch (error) {
      throw error;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if ((error.response.data.error || error.response.data) === 'TokenExpiredError: jwt expired' || (error.response?.data.error || error.response?.data) === 'Response error: Access denied. No token provided') {
      await EncryptedStorage.removeItem('accessToken');
      navigate('SignInStack')


    }
    return Promise.reject(error);
  },
);


export function _wretch(url: string) {
  return wretch(url)
    .headers(async () => {
      const tokenNew = await EncryptedStorage.getItem('accessToken');
      const cleanTokenNew = tokenNew?.replace(/"/g, '');
      return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cleanTokenNew}`,
      }
    })

}

export default apiClient;
