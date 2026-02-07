// utils/cart.ts
import type { Cart } from "@/types/types";

export const getCartFromLocal = (): Cart[] => {
  const raw = localStorage.getItem("cart");
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const getTotalPrice = (cart: Cart[]) =>
  cart.reduce((total, item) => total + item.price * item.count, 0);

export const clearCart = () => {
  localStorage.removeItem("cart");
};
