import {  CountryResponseData, TrainingResponseAttributes, TrainingTypeAttributesdata } from "../../interface/ERP/tainingTypes";
import { SourceFundingAttributes } from "../../interface/ERP/traveltypes";


// Make sure leaveTypes is definitely an array before using it
export const TrainingRequestForm = (
  TrainingTypes: TrainingTypeAttributesdata|undefined,
  training_category: TrainingResponseAttributes|undefined,
  country:  CountryResponseData 
 | undefined,
  spurceofFunding: SourceFundingAttributes,
) => {
  return [
    {
      type: 'dropdown',
      label: 'Training Type',
      name: 'training_type',
      data: Array.isArray(TrainingTypes)
        ? TrainingTypes.map(item => ({
          label: item.name, // Assuming each item has a `name` field
          value: item.id, // Assuming each item has an `id` field
        }))
        : [],
      placeholder: 'Select Trainging Type',
    },
    {
      type: 'dropdown',
      label: 'Training Category',
      name: 'training_category',
      data: Array.isArray(training_category?.data)
        ? training_category.data.map(item => ({
          label: item.name, // Assuming each item has a `name` field
          value: item.id, // Assuming each item has an `id` field
        }))
        : [],
      placeholder: 'Select Trainging Category',
    },
    {
      type: 'text',
      label: 'Course/Programme ',
      name: 'training_course', // ✅ Corrected
      placeholder: 'Enter Training Course',
    },
    {
      type: 'text',
      label: 'Institute Name/Location ',
      name: 'training_institute_name',
      placeholder: 'Enter Institute Name/Location',
    },
    {
      type: 'dropdown',
      label: 'Country',
      name: 'training_country',
      data: [
        { label: 'Select Country', value: '' },
        
        ...(Array.isArray(country?.data.Country)
          ? country.data.Country.map((item) => ({
            
            label: item.name,
            value: item.id,
          }))
          : [])
          
      ],
      // placeholder: 'Select Country',
    },

    {
      type: 'checkbox',
      label: 'Is Training Expense Applicable?',
      name: 'training_expense_applicable',
    },
    {
      type: 'MultiSelect',
      label: 'Source of Funding ',
      name: 'training_fund',
      data: Array.isArray(spurceofFunding?.data)
        ? spurceofFunding.data.map(item => ({
          label: item.name, // Assuming each item has a `name` field
          value: item.id, // Assuming each item has an `id` field
        }))
        : [],
      placeholder: 'Select Source of Funding ',
    },
    {
      type: 'date',
      label: 'From Date',
      name: 'training_from_date',
      placeholder: 'Select start date',
    },
    {
      type: 'date',
      label: 'To Date',
      name: 'training_end_date',
      placeholder: 'Select end date',
    },

    {
      type: 'checkbox',
      label: 'Need_advance ?',
      name: 'training_need_advance',
    },
    {
      type: 'text',
      label: 'Advance Amount',
      name: 'training_advance_amount',
      placeholder: '0',
    },
    {
      type: 'text',
      label: 'Training Description',
      name: 'training_description',
      placeholder: 'Enter reason for  description',
    },

  ];
};

export const initialValues = {
  training_type: 0,
  training_category: 0,
  training_course: '',
  training_institute_name: '',
  training_country: 0,
  training_expense_applicable: false,
  training_fund: [],
  training_from_date: '',
  training_end_date: '',
  training_need_advance: null,
  training_advance_amount: '',
  training_description: '',
};
