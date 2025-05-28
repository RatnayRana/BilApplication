import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface AuthAttributes {
  username: string;
  password: string;
}
export interface AuthResponse {
  status: number;
  message: string;
  accessToken: string;
  refreshToken: string;
}
export interface AuthField {
  id:number
  name: 'username' | 'password';
  label: string;
  placeholder: string;
  icon: string;
  isPassword: boolean;
  validation: boolean;
}

export interface AuthFormProps {
  buttonStyle?: StyleProp<ViewStyle>;
  labelButtonstyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  OnFormSubmit?: () => void;
  onSubmit?: (values: {username: string; password: string}) => void;
  isLoading: boolean;
  inputStyle?: StyleProp<ViewStyle>;
}

export interface AuthButtonProps {
  labelButtonstyle?: StyleProp<TextStyle>;
  title: string;
  onPress: () => void;
  isLoading: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  ViewStyle?: StyleProp<ViewStyle>;
}
export interface AuthForm {
  buttonStyle?: StyleProp<ViewStyle>;
  labelButtonstyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onSubmit: (values: AuthAttributes) => void;
  isLoading: boolean;
  inputStyle?: StyleProp<ViewStyle>;
  form: AuthField[];
  // form: AuthField[] | {
  //   reduce: (
  //     callback: (acc: AuthAttributes, field: AuthField) => AuthAttributes,
  //     obj: object,
  //   ) => {'password': string, 'username': string};
  // };
  // form: []
}

export type CustomAxiosError = {
  response: {
    data: {
      error: string;
      status: number;
    };
  };
};

declare global {
  interface axiosError {
      response: {
        data: {
          error: string;
          status: number;
        };
    };
  }
}

export interface TokenAttributes {
  accessToken: string;
  refreshToken: string;
  message: string;
  err : axiosError
  
}
