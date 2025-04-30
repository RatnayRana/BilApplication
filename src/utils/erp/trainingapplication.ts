import {
  CountryItem,
  CountryType,
  SourceFundingAttributes,
  TrainingCategory,
  TrainingType,
} from '../../interface/ERP/trainingtypes';

// Make sure leaveTypes is definitely an array before using it
export const TrainingRequestForm = (
  TrainingTypes: TrainingType,
  training_category: TrainingCategory,
  country: CountryType,
  spurceofFunding: SourceFundingAttributes,
) => {
  // Ensure leaveTypes is an array
  return [
    {
      type: 'dropdown',
      label: 'Training Type',
      name: 'training_type',
      data: Array.isArray(TrainingTypes?.data)
        ? TrainingTypes.data.map(item => ({
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
      name: 'course_programme ',
      placeholder: 'Enter Course/Programme',
    },
    {
      type: 'text',
      label: 'Institute Name/Location ',
      name: 'institute_name_location ',
      placeholder: 'Enter Institute Name/Location',
    },
    {
      type: 'dropdown',
      label: 'Country',
      name: 'country',
      data: [
        { label: 'Select Country', value: '' },
        ...(Array.isArray(country?.data)
          ? country.data.map((item: CountryItem) => ({
              label: item.name,
              value: item.name,
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
      type: 'dropdown',
      label: 'Source of Funding ',
      name: 'source_of_funding',
      data: Array.isArray(spurceofFunding?.data)
        ? spurceofFunding.data.map(item => ({
            label: item.name, // Assuming each item has a `name` field
            value: item.name, // Assuming each item has an `id` field
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
      name: 'training_to_date',
      placeholder: 'Select end date',
    },

    {
      type: 'checkbox',
      label: 'Need_advance ?',
      name: 'need_advance',
    },
    {
      type: 'text',
      label: 'Advance Amount',
      name: 'travel_advance_amount',
      placeholder: '0',
    },
    {
      type: 'text',
      label: 'Description',
      name: 'training_description',
      placeholder: 'Enter reason for leave',
    },
  
  ];
};

export const initialValues = {
  training_type: '',
  training_category: '',
  course_programme: '',
  institute_name_location: '',
  country: '',
  training_expense_applicable: false,
  source_of_funding: '',
  training_from_date: '',
  training_to_date: '',
  need_advance:false,
  travel_advance_amount: '',
  training_description: '',
};
