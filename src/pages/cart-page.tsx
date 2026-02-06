import { useEffect, useState } from "react";
import CartItem from "@/features/cart/components/cart-item";
import HeaderComponent from "@/features/cart/components/header";
import type { Cart } from "@/types/types";
import EmptyCart from "@/features/cart/components/empty";

const CartPage = () => {
  const [cart, setCart] = useState<Cart[]>(() => {
    const cartRaw = localStorage.getItem("cart");
    if (!cartRaw) return [];

    try {
      const parsed = JSON.parse(cartRaw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handlePlus = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };

  const handleMinus = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item,
        )
        .filter((item) => item.count > 0),
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <HeaderComponent />

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-15 mt-20">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onPlus={handlePlus}
              onMinus={handleMinus}
              onRemove={handleRemove}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default CartPage;
