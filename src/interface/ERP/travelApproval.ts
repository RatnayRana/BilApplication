export interface TravelApprovalData {
    travel_id: string;
    travel_emp_code: string;
    travel_status: number;
    travel_expense_applicable: string;
    travel_grade: number,
    travel_designation: number;
    travel_branch: number;
    travel_department: number;
    travel_type: number;
    travel_purpose: number;
    travel_funding: number;
    travel_request_date: Date;
    travel_mode: number;
    travel_from_date: Date;
    travel_to_date: Date;
    travel_duration: string;
    travel_advance: string;
    travel_advance_amount: number;
    travel_from_place: string;
    travel_to_place: string;
    travel_description: string;
    travel_remarks: string;
    travel_effective_start_date: Date;
    emp_employee_number: string;
    emp_full_name: string;
    status_name: string;
    branch_name: string
    employee_code?: string


}

export interface TravelApproval {

    travel_id?: string;
    employee_code?: string;
    travel_type?: number;
    travel_purpose?: number;
    travel_expense_applicable?: string
    travel_funding?: number;
    travel_mode?: number;
    travel_from_date?: Date;  // ISO format date e.g. "2025-03-15"
    travel_to_date?: Date;    // ISO format date
    travel_duration?: number;   // In days or hours
    travel_advance_amount?: number | null;
    travel_from_place?: string;
    travel_to_place?: string;
    travel_description?: string;
    travel_status?: number;     // E.g., 12 = approved by admin
    travel_remarks?: string; 
    approval_remarks?:string  // Optional remarks
}
//CLAIM
export interface TravelClaimAttributes {
  trv_bil_id?: string;
  trv_bill_travel_id?: string;
  trv_bil_status?: number;
  trv_bill_claim_date?: string;
  trv_bill_balance_amount?: string;
  emp_employee_number?: string;
  emp_full_name?: string;
  status_name?: string;
  branch_name?: string;
  employee_code?:string;
}

export interface TravelclaimSendData{
 employee_code?:string
    //employee_code20190114755", //ADM
   travel_bill_id?:string
   travel_bill_status?:string
    //travel_bill_status":6,//ADM
   travel_bill_remarks?:string
}
// CLAIM SEND DATA