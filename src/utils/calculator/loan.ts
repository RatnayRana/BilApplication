
// Make sure leaveTypes is definitely an array before using it
export const LoanConfig = (
) => {

  // Ensure leaveTypes is an array
  return [
    {
      type: 'text',
      label: 'Loan Amount',
      name: 'loanAmount',
      placeholder: 'Enter Loan Amount',
    },
    {
      type: 'text',
      label: 'Interest Rate (%)',
      name: 'interestRate',
      placeholder: 'Enter Interest Rate',
    },
    {
      type: 'text',
      label: 'Loan Tenure (Years)',
      name: 'tenureYears',
      placeholder: 'Enter Loan Tenure ',
    },
  ];
};

export const initialValues = {
  loanAmount: '',
  interestRate: '',
  tenureYears: '',

};
