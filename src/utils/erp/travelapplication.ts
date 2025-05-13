import {
  ModeofTravel,
  PurposeofTravel,
  TravelFunding,
  TravelTypeAttributes,
} from '../../interface/ERP/leaveapplication';

// Make sure leaveTypes is definitely an array before using it
export const TravelRequestForm = (
  travelType: TravelTypeAttributes,
  purposeofTravel: PurposeofTravel,
  travelFunding: TravelFunding,
  modeofTravel: ModeofTravel,
) => {
  return [
    {
      type: 'dropdown',
      label: 'Travel Type',
      name: 'travel_type',
      data: Array.isArray(travelType?.data)
        ? travelType.data.map(item => ({
            label: item.name, // Assuming each item has a `name` field
            value: item.id, // Assuming each item has an `id` field
          }))
        : [],
      placeholder: 'Select Travel Type',
    },
    {
      type: 'dropdown',
      label: 'Purpose of Travel ',
      name: 'travel_purpose',
      data: Array.isArray(purposeofTravel?.data)
        ? purposeofTravel.data.map(item => ({
            label: item.name, // Assuming each item has a `name` field
            value: item.id, // Assuming each item has an `id` field
          }))
        : [],
      placeholder: 'Select Purpose Type',
    },
    {
      type: 'checkbox',
      label: 'Is Travel Expense Application?',
      name: 'travel_expense_applicable',
    },
    {
      type: 'dropdown',
      label: 'Travel Funding ',
      name: 'travel_funding',
      data: Array.isArray(travelFunding?.data)
        ? travelFunding.data.map(item => ({
            label: item.name, // Assuming each item has a `name` field
            value: item.id, // Assuming each item has an `id` field
          }))
        : [],
      placeholder: 'Select Travel Funding',
    },
    {
      type: 'dropdown',
      label: 'Mode of Travel',
      name: 'travel_mode',
      data: Array.isArray(modeofTravel?.data)
        ? modeofTravel.data.map(item => ({
            label: item.name, // Assuming each item has a `name` field
            value: item.id, // Assuming each item has an `id` field
          }))
        : [],
      placeholder: 'Select Mode of Travel',
    },
    {
      type: 'date',
      label: 'From Date',
      name: 'travel_from_date',
      placeholder: 'Select start date',
    },
    {
      type: 'date',
      label: 'To Date',
      name: 'travel_to_date',
      placeholder: 'Select end date',
    },

    {
      type: 'checkbox',
      label: 'Need_advance ?',
      name: 'need_advance',
    },
    {
      type: 'text',
      label: 'advance_amount',
      name: 'travel_advance_amount',
    },
    {
      type: 'text',
      label: 'From Place',
      name: 'travel_from_place',
      placeholder: 'Enter the place',
    },
    {
      type: 'text',
      label: 'To Place',
      name: 'travel_to_place',
      placeholder: 'Enter the place ',
    },
    {
      type: 'text',
      label: 'Travel Reason',
      name: 'travel_description',
      placeholder: 'Enter the travel Decription ',
    },
  ];
};

export const initialValues = {
  travel_type: 0,
  travel_purpose: 0,
  travel_funding: 0,
  travel_from_date: '',
  travel_to_date: '',
  travel_mode: 0,
  travel_advance_amount: 0,
  travel_from_place: '',
  travel_expense_applicable: false,
  travel_to_place: '',
  need_advance: false,
  travel_description: '',
};
