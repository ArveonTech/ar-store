import { LoginForm } from "@/components/login-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginFormType } from "../types";
import useLoginWithCredentials from "../api/use-login-with-credentials";

const LoginFormComponent = () => {
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState<LoginFormType>({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInputFormLogin = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.currentTarget;
    setFormLogin((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    isError: isErrorCredentials,
    data: dataCredentials,
    mutate: mutateCredentials,
  } = useLoginWithCredentials({
    formLogin,
    handleLoading: handleLoading,
  });

  const accessToken = dataCredentials?.accessToken;

  const errorForm = isErrorCredentials ? "Login failed" : null;

  useEffect(() => {
    if (!accessToken || isErrorCredentials) return;

    localStorage.setItem("access-token", accessToken);
    navigate("/app");
  }, [accessToken, navigate, isErrorCredentials]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutateCredentials();
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          formLogin={formLogin}
          handleChangeInput={handleChangeInputFormLogin}
          handleSubmit={handleSubmit}
          errorForm={errorForm}
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
          isLoadingCredentials={isLoading}
        />
      </div>
    </div>
  );
};

export default LoginFormComponent;
