import {useQuery} from '@tanstack/react-query';
import apiClient from '../../../post/postapi';
import {ERPURL} from '../../../component/APIURL/ERP/erpurl';
import {CacheManager} from '../../../public/middleware/cacheManager/cachemanager';
import {  TrainingResponse } from '../../../interface/ERP/trainingtypes';

export const fetchTrainingDropDownData = () => {
  const cachemanager = new CacheManager();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery<TrainingResponse, Error>({
    queryKey: ['trainingDropDownData'],
    queryFn: async () => {
      try {
        const trainingDropDownData = JSON.stringify('trainingDropDownData');
        if (cachemanager.has(trainingDropDownData)) {
          console.log('hit');
          const cachedData = cachemanager.get(trainingDropDownData);

          if (cachedData) {
            return cachedData as TrainingResponse; // ✅ Ensure cached data exists
          }
        }

        console.log('missed');
        const response = await apiClient.get<TrainingResponse>(
          ERPURL.travelTypesQuery,
        );
        cachemanager.set(trainingDropDownData, response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
};

