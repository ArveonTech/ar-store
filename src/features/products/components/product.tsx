import { setSource } from "@/features/others/store/source-slice";
import type { Product } from "@/types/types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface PropsProduct {
  product: Product;
}

const ProductComponent = ({ product }: PropsProduct) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSourceClickToProduct = ({ productId }: { productId: number }) => {
    dispatch(setSource("products"));
    navigate(`/product/${productId}`);
  };

  return (
    <div
      className="relative max-w-63 overflow-hidden rounded-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl max-[400px]:w-[90%] cursor-pointer shadow bg-card"
      onClick={() => handleSourceClickToProduct({ productId: product.id })}
    >
      {/* Image */}
      <div className="h-32 overflow-hidden `max-[400px]:h-45">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        {/* Title */}
        <h2 className="mb-5  font-medium tracking-tight max-[400px]:text-base line-clamp-1">
          {product.title}
        </h2>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold my-2">${product.price}</p>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FACC15">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-zinc-500 text-[12px]">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
