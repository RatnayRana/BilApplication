import { SalaryCreationAttributes } from "../../interface/ERP/salaryAdvance";



// Make sure leaveTypes is definitely an array before using it
export const SalaryAdvanceRequestForm = (

) => {
    return [
        {
            type: 'displaytext',
            label: 'Name',
            name: 'employee_name',
        },
        {
            type: 'displaytext',
            label: 'Take Home Salary',
            name: 'take_home_salary',
        },
        {
            type: 'displaytext',
            label: 'Applicable Advance',
            name: 'applicable_advance_amt',
        },
        {
            type: 'text',
            label: 'Advance Amount ',
            name: 'salary_advance_amt', // ✅ Corrected
        },
        {
            type: 'displaytext',
            label: 'Monthly Installment',
            name: 'monthly_installment_amt',
        },
        {
            type: 'displaytext',
            label: 'New Take Home Pay (%)',
            name: 'saAmtPercentage',
        },
        {
            type: 'displaytext',
            label: 'New Take Home Amount',
            name: 'sa_NewTakeHome',
        },
        {
            type: 'text',
            label: 'Purpose ',
            name: 'salary_purpose',
            placeholder: 'Enter reason for  Purpose',
        },

    ];
};
