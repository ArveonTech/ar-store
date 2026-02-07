import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleSourceBackProduct = () => {
    navigate(`/app`);
  };

  return (
    <header className="mt-10 px-15 flex justify-between items-center">
      <div
        className="bg-accent w-fit rounded-full p-2 cursor-pointer"
        onClick={() => handleSourceBackProduct()}
      >
        <ArrowLeft />
      </div>
      <h1>Profile</h1>
      <ModeToggle />
    </header>
  );
};

export default HeaderComponent;
