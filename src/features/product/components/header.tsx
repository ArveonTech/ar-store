import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/stores/hook";

const HeaderComponent = () => {
  const sourceLink = useAppSelector((state) => state.sourceSlice);
  const navigate = useNavigate();

  const handleSourceBackProduct = () => {
    navigate(`/${sourceLink}`);
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
