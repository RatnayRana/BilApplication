export interface FetchClaimApprovalDataAttributes {
  training_bil_id?:string
  emp_employee_number?: string
  emp_full_name?: string;
  branch_name?:string;
  training_bill_claim_date?:number;
  training_bill_balance_claim_amount?:string;
  status_name?: string;
              employee_code?:string,
              training_bill_id?:string;

  
}
export interface DatatoSendAttributes{
      training_bill_id?:string,
        training_bill_remarks?:string,
          training_bill_status?:string,
            employee_code?:string,




}