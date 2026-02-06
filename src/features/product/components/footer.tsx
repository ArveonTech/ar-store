import type { Cart, Product } from "@/types/types";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { status } from "../store/add-cart-product-slice";
import { useAppDispatch } from "@/stores/hook";

interface PropsFooter {
  product?: Product;
}

const FooterComponent = ({ product }: PropsFooter) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(1);

  const handleAddToCart = (product: Cart) => {
    const cartLocal = localStorage.getItem("cart");

    if (!cartLocal) {
      localStorage.setItem("cart", JSON.stringify([product]));
      dispatch(status("successfully added to cart"));
      return;
    }

    const arrayCart: Cart[] = JSON.parse(cartLocal);

    if (!Array.isArray(arrayCart)) return;

    const findProductInCart = arrayCart.find((item) => item.id === product.id);

    if (findProductInCart) {
      findProductInCart.count += product.count;
    } else {
      arrayCart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(arrayCart));

    dispatch(status("successfully added to cart"));
  };

  if (!product) return null;

  return (
    <footer className="sticky bottom-5 bg-secondary mx-15 mt-10 text-secondary-foreground flex justify-between p-3 rounded-xl items-center">
      <div>
        <h1 className="text-xl font-semibold line-clamp-1">{product.title}</h1>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => count > 1 && setCount(count - 1)}
            className="px-3 py-1 border rounded"
          >
            -
          </button>

          <span>{count}</span>

          <button
            onClick={() => setCount(count + 1)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>

        <div
          className="flex gap-2 bg-card p-2 rounded cursor-pointer hover:bg-card/80"
          onClick={() =>
            handleAddToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              count,
              images: product.images,
            })
          }
        >
          <ShoppingCart />
          <span className="line-clamp-1">Add to cart</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
