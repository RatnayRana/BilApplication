import {
    ModeofTravel,
    PurposeofTravel,
    TravelFunding,
    TravelTypeAttributes,
} from '../../interface/ERP/leaveapplication';
import { ShiftCreationAttributes } from '../../interface/ERP/leavetypes';
import { initialValues } from '../erp/leaveapplication';

// Make sure leaveTypes is definitely an array before using it
export const SearchRequestForm = (policyTypes: ShiftCreationAttributes) => {
  return [
    {
      type: 'dropdown',
      label: 'Policy Type',
      name: 'policy_type',  // lowercase
      data: Array.isArray(policyTypes?.data)
        ? policyTypes.data.map(item => ({
            label: item.name,
            value: item.name,
          }))
        : [],
      placeholder: 'Select Policy type',
    },
    {
      type: 'text',
      label: 'Policy Number',
      name: 'policy_number',  // lowercase
      placeholder: 'Enter the policy number',
    },
    {
      type: 'text',
      label: 'Vehicle Number',
      name: 'vehicle_number',  // fix spelling + lowercase
      placeholder: 'Enter the vehicle number',
    },
    {
      type: 'text',
      label: 'Claim Number',
      name: 'claim_number',  // lowercase
      placeholder: 'Enter the claim number',
    },
  ];
};


export const searchRequestInitialValues = {
    Policy_Type: '',
    Policy_Number: '',
    Vechile_Number: '',
    claim_Number: '',
    // Vechile_Number: '',
};