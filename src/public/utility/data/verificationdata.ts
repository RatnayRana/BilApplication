export interface DropdownItem {
  label: string;
  value: string;
}
export interface VerificationFormProps {
  title?: string;
  Dropdownname?:string
  placeholder?: string;
  dropdownData: DropdownItem[];
  onSubmit?: (data: {isVerified: boolean; verifier?: string}) => void;
}
