export interface SalaryAdvanceAttributes {
  name: string;
  index?: number;
  id?:number
}

export interface SalaryCreationAttributes {
  data: Array<SalaryAdvanceAttributes>;
}

export interface SalaryAttributes{
  employee_name?:string;
  take_home_salary?:string
  salary_advance_amt?:any
  monthly_installment_amt?:any
  saAmtPercentage?:string
  sa_NewTakeHome?:any
  salary_purpose?:string
  applicable_advance_amt?:any
  gross_salary?:string
  
  
}