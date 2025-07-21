export interface LeaveAttributes {
  id: number;
  name: string;
}

export interface LeaveCreationAttributes extends Omit<LeaveAttributes, 'id'> {
  id?: number;
}
export interface LeaveAttributes {
  id: number;
  name: string;
}
export interface LeaveTypeResponse {
  status: string;
  message: string;
  data: Array<LeaveAttributes>;
}

export interface shiftAtrributes {
  name?: string;
  index?: number;
  id?:number
}


export interface ShiftCreationAttributes {
  data: Array<shiftAtrributes>;
}
export interface deatils{
  value?: string;
  label?: string;
}
export interface SearchOptionsAttributes {
  policy: Array<deatils>;
}

export interface LeaveTypeResponseAttributes {
  data: Array<LeaveAttributes>;
}

export interface CreateLeaveAttributes {
  employee_id?: string; // Make optional
  email?: string; // Make optional
  employee_code?: number; // Make optional
  leave_type: number | string; // Accept string from form, number for API
  leave_from_date: Date | string; // Accept string from form
  leave_to_date: Date | string; // Accept string from form
  leave_half_day: boolean | string; // Accept both formats
  leave_day_shift: string | boolean | number; // Accept multiple formats
  no_of_leave_day?: number; // Make optional
  leave_total_days?: number; // Make optional
  leave_reason: string;
}


export interface ApprovedLeaveAttributes {
  leave_applicant_id?: string;
  employee_code?: string;
  employee_id?: string;
  email?: string;
  leave_type?: number;
  leave_from_date?: Date;
  leave_to_date?: Date;
  leave_half_day?: string;
  leave_day_shift?: string;
  no_of_leave_day?: number;
  leave_total_days?: number;
  leave_reason?: string;
  leave_status?: number;
  approval_remarks?: string;
}
