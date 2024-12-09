export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}