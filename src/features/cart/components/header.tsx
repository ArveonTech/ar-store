import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleSourceBackProduct = () => {
    navigate(`/app`);
  };

  return (
    <header className="mt-10 px-15">
      <div
        className="bg-accent w-fit rounded-full p-2 animate-bounce cursor-pointer"
        onClick={() => handleSourceBackProduct()}
      >
        <ArrowLeft />
      </div>
    </header>
  );
};

export default HeaderComponent;
