import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

export const testDirectAPI = async () => {
  try {
    const token = await EncryptedStorage.getItem('accessToken');
    let cleanToken = ''; // Define cleanToken outside the if block

    if (token) {
      cleanToken = token.replace(/"/g, '');
    }

    // Make a direct call to test the token
    const response = await axios({
      method: 'post', // or whatever method you need
      url: 'http://172.16.40.23:3000/api/v1/erp/createleave',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cleanToken}`,
      },
    });

    console.log('Direct API call successful:', response.data);
  } catch (error) {
    console.error('Direct API call failed:', error);
  }
};
