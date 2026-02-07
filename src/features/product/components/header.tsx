import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/stores/hook";
import { removeSource, setSource } from "@/features/others/store/source-slice";
import type { Product } from "@/types/types";
import { useDispatch } from "react-redux";

const HeaderComponent = ({ product }: { product?: Product }) => {
  const dispatch = useDispatch();
  const sourceLink = useAppSelector((state) => state.sourceSlice);
  const navigate = useNavigate();

  const handleSourceBackProduct = () => {
    const lastIndex = sourceLink.length - 1;
    const lastItem = sourceLink[lastIndex] ? sourceLink[lastIndex] : "app";
    dispatch(removeSource(`${lastItem}`));
    navigate(`/${lastItem}`);
  };

  const handleToCart = () => {
    const urlSource: string = product?.id ? `product/${product?.id}` : "app";
    dispatch(setSource(urlSource));
    navigate(`/cart`);
  };

  return (
    <header className="mt-10 px-15 flex justify-between items-center">
      <div
        className="bg-accent w-fit rounded-full p-2 cursor-pointer"
        onClick={() => handleSourceBackProduct()}
      >
        <ArrowLeft />
      </div>
      <div
        className="bg-accent w-fit rounded-full p-2 cursor-pointer"
        onClick={() => handleToCart()}
      >
        <ShoppingCart />
      </div>
    </header>
  );
};

export default HeaderComponent;
