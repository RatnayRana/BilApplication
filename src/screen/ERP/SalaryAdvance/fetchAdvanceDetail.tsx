import { UndefinedInitialDataOptions, useMutation, UseMutationOptions, useQuery } from "@tanstack/react-query"
import apiClient from "../../../post/postapi"
import { ERPURL } from "../../../component/APIURL/ERP/erpurl"
import { SalaryAdvanceResponseAttributes } from "../../../interface/ERP/fetchAdvanceDetails"

export const fetchAdvanceDetails=(employee_code: string | undefined, options?:Omit<UndefinedInitialDataOptions<SalaryAdvanceResponseAttributes, Error, SalaryAdvanceResponseAttributes, string[]>, "queryKey" | "queryFn">)=>{
    return useQuery({
        queryKey:['FetchAdvanceDetails'],
        queryFn:async ()=>{
            const response = await apiClient.post(ERPURL.fetchAdvanceDetail,{employee_code})
            return response.data as SalaryAdvanceResponseAttributes

        },
        ...options
    })
}