import { setSource } from "@/features/others/store/source-slice";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToCart = () => {
    dispatch(setSource("products"));
    navigate("/cart");
  };

  return (
    <header className="mt-10 px-15 flex items-center justify-between">
      <Link to={`/app`}>
        <div className="bg-accent w-fit rounded-full p-2">
          <ArrowLeft />
        </div>
      </Link>
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
