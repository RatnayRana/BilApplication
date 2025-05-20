export interface Trainingttributes {
  id: number;
  name: string;
  created_by?:number;
  created_at?:any;
  updated_at?:any

}

export interface TrainingTypeAttributes {
  data: Trainingttributes[]
}

export interface TrainingResponseAttributes {
  data: TrainingTypeAttributes;
  message: string;
  status: number;
}

export interface TrainingTypeAttributesdata {

  data: Trainingttributes[];
}

export interface training_fund {
  id: number
}

export interface CreateTrainingAttributes {
  emp_full_name?:string
  training_id?: string
  employee_code?: string;
  training_type?: number;
  training_category?: number;
  training_course?: string;
  training_institute_name?: string;
  training_country?: number;
  training_expense_applicable?: string | boolean; // "Yes" or "No"
  training_fund?: string[];
  training_from_date?: any;
  training_end_date?: any;
  training_duration?: number;
  training_need_advance?: string | boolean; // "Y" or null
  training_advance_amount?: string;
  training_description?: string;
  emp_employee_number?:string;
  branch_name?:string;
  training_status?:number;
  approval_remarks?:string
}

export interface CountryResponseData{
  data:{
    Country:Trainingttributes[]
  }
  message: string;
  status: number;
}