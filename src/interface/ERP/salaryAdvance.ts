export interface SalaryAdvanceAttributes {
  name: string;
  index?: number;
  id?:number
}

export interface SalaryCreationAttributes {
  data: Array<SalaryAdvanceAttributes>;
}