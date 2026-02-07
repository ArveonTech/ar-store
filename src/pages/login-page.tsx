import LoginFormComponent from "@/features/login/components/login-form";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Link to={`/`}>
        <div className="m-5 absolute bg-accent p-2 rounded-full cursor-pointer">
          <Home />
        </div>
      </Link>
      <LoginFormComponent />
    </>
  );
};

export default LoginPage;
