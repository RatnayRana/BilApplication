import {useQuery} from '@tanstack/react-query';
import apiClient from '../../../post/postapi';
import {ERPURL} from '../../../component/APIURL/ERP/erpurl';
import {CacheManager} from '../../../public/middleware/cacheManager/cachemanager';
import {CountryResponseData, TrainingResponseAttributes } from '../../../interface/ERP/tainingTypes';
import { LeaveTypeResponse } from '../../../interface/ERP/leavetypes';

export const fetchTrainingDropDownData = () => {
  const cachemanager = new CacheManager();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery<TrainingResponseAttributes, Error>({
    queryKey: ['trainingDropDownData'],
    queryFn: async () => {
      try {
        const trainingDropDownData = JSON.stringify('trainingDropDownData');
        if (cachemanager.has(trainingDropDownData)) {
          console.log('hit');
          const cachedData = cachemanager.get(trainingDropDownData);

          if (cachedData) {
            return cachedData as TrainingResponseAttributes; // ✅ Ensure cached data exists
          }
        }

        console.log('missed');
        const response = await apiClient.get<TrainingResponseAttributes>(
          ERPURL.trainingType,
        );
        cachemanager.set(trainingDropDownData, response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
};


export const CountryDataQuery =()=>{
  const cachemanager = new CacheManager();

  return useQuery({
    queryKey:['CountryData'],
    queryFn:async()=>{

      try {
        const leavesType = JSON.stringify('CountryData');
        if (cachemanager.has(leavesType)) {
          console.log('hit');
          const cachedData = cachemanager.get(leavesType);

          if (cachedData) {
            return cachedData as CountryResponseData; // ✅ Ensure cached data exists
          }
        }

        console.log('missed');
        const response = await apiClient.get<CountryResponseData>(
          ERPURL.fetchTrainingCountryFunding,
        );
        cachemanager.set(leavesType, response.data);
        return response.data;
      } catch (error) {
        throw error; 
      }
      
    
    }
  })

}




 

