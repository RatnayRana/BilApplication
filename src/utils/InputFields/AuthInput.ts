import { AuthField } from '../../interface/auth/auth.interface';

export const authFields: AuthField[] = [
  {
    name: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
    icon: 'key',
    isPassword: false,
    validation: true,

  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    icon: 'user',
    isPassword: true,
    validation:true,
  },
];
