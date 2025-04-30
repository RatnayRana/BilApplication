export interface TravelAttributes {
  id: number;
  name: string;

}

export interface TravelTypeAttributes {
  
  data: Array<TravelAttributes>;
}

export interface PurposeofTravel {
  data: Array<TravelAttributes>;
}
export interface TravelFunding {
  data: Array<TravelAttributes>;
}
export interface ModeofTravel {
  data: Array<TravelAttributes>;
}

export interface CreateTravelAttributes {
  employee_code?: string;
  travel_type?: number;
  travel_purpose?: number;
  travel_expense_applicable?: string | boolean; //Yes or No
  travel_funding?: number;
  travel_mode?: number;
  travel_from_date?: Date | string;
  travel_to_date?: Date | string;
  travel_duration?: number;
  travel_advance_amount?: number;
  travel_from_place?: string;
  travel_to_place?: string;
  travel_description?: string;
}
