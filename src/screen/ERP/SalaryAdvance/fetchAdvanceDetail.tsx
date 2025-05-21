import { useMutation } from "@tanstack/react-query"
import apiClient from "../../../post/postapi"
import { ERPURL } from "../../../component/APIURL/ERP/erpurl"
import { SalaryAdvanceResponseAttributes } from "../../../interface/ERP/fetchAdvanceDetails"

export const fetchAdvanceDetails=()=>{
    return useMutation({
        mutationKey:['FetchAdvanceDetails'],
        mutationFn:async (employee_code:string|undefined)=>{
            const response = await apiClient.post(ERPURL.fetchAdvancedetail,{employee_code})
            return response.data as SalaryAdvanceResponseAttributes

        }
    })
}