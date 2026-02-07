import { removeSource } from "@/features/others/store/source-slice";
import { useAppSelector } from "@/stores/hook";
import { ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sourceLink = useAppSelector((state) => state.sourceSlice);

  const handleSourceBackProduct = () => {
    const lastIndex = sourceLink.length - 1;
    const lastItem = sourceLink[lastIndex] ? sourceLink[lastIndex] : "app";
    dispatch(removeSource(`${lastItem}`));
    navigate(`/${lastItem}`);
  };

  return (
    <header className="mt-10 px-15">
      <div
        className="bg-accent w-fit rounded-full p-2 cursor-pointer"
        onClick={() => handleSourceBackProduct()}
      >
        <ArrowLeft />
      </div>
    </header>
  );
};

export default HeaderComponent;
