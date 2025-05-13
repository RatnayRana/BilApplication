export interface Trainingttributes {
  id: number;
  name: string;
}

export interface TrainingType {
  Travel_funding: Trainingttributes[];
  Travel_mode: Trainingttributes[];
  Travel_purpose: Trainingttributes[];
  Travel_type: Trainingttributes[];
}
export interface TrainingResponse {
  data: {data:TrainingType};
  message: string;
  status: number;
}
export interface TrainingCategory {
  data: Array<Trainingttributes>;
}
export interface CountryType {
  data: Array<Trainingttributes>;
}

export interface SourceFundingAttributes {
  data: Array<Trainingttributes>;
}

export interface CountryItem {
  id: number;
  name: string;
}

export interface CountryType {
  data: CountryItem[];
}
export type Country = {
  id: number;
  name: string;
};
interface TravelOption {
  created_at: string;
  id: number;
  name: string;
  updated_at: string;
}

export interface TravelData {
  Travel_funding: TravelOption[];
  Travel_mode: TravelOption[];
  Travel_purpose: TravelOption[];
  Travel_type: TravelOption[];
}
