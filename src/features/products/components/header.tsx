import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="mt-10 px-15 flex items-center justify-between">
      <Link to={`/app`}>
        <div className="bg-accent w-fit rounded-full p-2">
          <ArrowLeft />
        </div>
      </Link>
      <Link
        to={`/cart`}
        className="bg-accent w-fit rounded-full p-2 cursor-pointer"
      >
        <ShoppingCart />
      </Link>
    </header>
  );
};

export default HeaderComponent;
