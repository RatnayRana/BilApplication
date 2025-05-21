import { SalaryCreationAttributes } from "../../interface/ERP/salaryAdvance";



// Make sure leaveTypes is definitely an array before using it
export const SalaryAdvanceRequestForm = (

    monthly_lumpsum: SalaryCreationAttributes
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
            type: 'text',
            label: 'Advance Amount ',
            name: 'applicable_advance_amt', // ✅ Corrected
            placeholder: 'Enter Training Course',
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
            type: 'dropdown',
            label: 'Monthly_Lumsum',
            name: 'monthly_lumsum',
            data: [

                ...(Array.isArray(monthly_lumpsum?.data)
                    ? monthly_lumpsum.data.map((item) => ({

                        label: item.name,
                        value: item.id,
                    }))
                    : [])

            ],
            // placeholder: 'Select Country',
        },
        {
            type: 'text',
            label: 'Purpose ',
            name: 'salary_purpose',
            placeholder: 'Enter reason for  Purpose',
        },

    ];
};

export const initialValues = {
    applicable_advance_amt: '',
    Take: '',
    New: '',
    training_country: 0,
    salary_purpose: ''

}