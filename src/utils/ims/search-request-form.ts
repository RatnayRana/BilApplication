import { SearchOptionsAttributes, ShiftCreationAttributes } from '../../interface/ERP/leavetypes';

export const SearchRequestForm = (policyTypes: ShiftCreationAttributes, policy: SearchOptionsAttributes) => {
  return [
    {
      type: 'dropdown',
      label: 'Policy Type',
      name: 'policy_type',
      data: Array.isArray(policyTypes?.data)
        ? policyTypes.data.map(item => ({
          label: item.name,
          value: item.name,
        }))
        : [],
      placeholder: 'Select Policy type',
    },

    {
      type: 'specialdropdown',
      label: 'Search Options',
      name: 'policy_options',
      data: Array.isArray(policy?.policy)
        ? policy.policy.map(item => ({
          label: item.label,
          value: item.value,
        }))
        : [],
      placeholder: 'Select Policy Options',
    },

    {
      type: 'text',
      label: 'Policy Number',
      name: 'policy_number',
      placeholder: 'Enter the policy number',
     
    },
    {
      type: 'driver-license-input',
      label: 'Vehicle Number',
      name: 'vehicle_reg_number', // Fixed typo
      placeholder: 'Enter the vehicle number',
     
    },
    {
      type: 'text',
      label: 'Claim Number',
      name: 'claim_number',
      placeholder: 'Enter the claim number',
     
    },
    {
      type: 'text',
      label: 'CID Number',
      name: 'cid_number',
      placeholder: 'Enter the CID number',
    
    },
  ];
};

// FIXED INITIAL VALUES
export const searchRequestInitialValues = {
  policy_type: '',        // Fixed case
  policy_options: '',     // Added missing field
  policy_number: '',
  vehicle_reg_number: '', // Fixed typo
  claim_number: '',       // Fixed case
  cid_number: ''
};