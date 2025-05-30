export interface SalaryAdvanceAttributes {
    employee_code?: string;
    employee_id?:string;
    employee_name?:string;
    gross_salary?:string;
    applicable_advance_amt?:number;
    monthly_installment_amt?:number
    take_home_pay?:string
}

export interface SalaryAdvanceResponseAttributes{
    data:SalaryAdvanceAttributes;
    message:string;
    status:number
}