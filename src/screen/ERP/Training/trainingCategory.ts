import { useMutation, useQuery } from '@tanstack/react-query';
import apiClient from '../../../post/postapi';
import { ERPURL } from '../../../component/APIURL/ERP/erpurl';
// import {CacheManager} from '../../../public/middleware/cacheManager/cachemanager';
import { TrainingResponseAttributes } from '../../../interface/ERP/tainingTypes';



export const TrainingCategoryDropDownData = () => {
    return useMutation({
        mutationKey: ["TrainingCategoryDropDownData"],
        mutationFn: async (id: number) => {

            const response = await apiClient.post(ERPURL.trainingCategory, { id })
            return response.data as TrainingResponseAttributes
        },
      

    })
};



