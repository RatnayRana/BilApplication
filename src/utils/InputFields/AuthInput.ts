import { AuthField } from '../../interface/auth/auth.interface';

export const authFields: AuthField[] = [
  {
    id:1,
    name: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
    icon: 'user',
    isPassword: false,
    validation: true,

  },
  {
    id:2,
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    icon: 'key',
    isPassword: true,
    validation:true,
  },
];
