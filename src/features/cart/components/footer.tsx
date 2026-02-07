import type { Cart } from "@/types/types";
import { getTotalPrice } from "../utils/cart";

interface PropsCheckoutFooter {
  cart: Cart[];
  onCheckout: () => void;
}

const FooterComponent = ({ cart, onCheckout }: PropsCheckoutFooter) => {
  const total = getTotalPrice(cart);

  return (
    <footer className="sticky bottom-5 mx-15 mt-10 bg-secondary text-secondary-foreground p-4 rounded-xl flex justify-between items-center">
      <div>
        <p className="text-sm">Total</p>
        <p className="text-xl font-semibold">${total.toFixed(2)}</p>
      </div>

      <button
        onClick={onCheckout}
        className="bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:opacity-90 cursor-pointer"
      >
        Checkout
      </button>
    </footer>
  );
};

export default FooterComponent;
