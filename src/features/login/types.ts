export interface LoginFormType {
  username: string;
  password: string;
}

export interface PropsLoginForm extends React.ComponentProps<"div"> {
  formLogin: LoginFormType;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errorForm: string | null;
  showPassword: boolean;
  handleShowPassword: () => void;
  isLoadingCredentials: boolean;
}
