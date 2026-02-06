import type { Cart } from "@/types/types";
import { Minus, Plus, Trash } from "lucide-react";

interface PropsCartItem {
  product: Cart;
  onPlus: (id: number) => void;
  onMinus: (id: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ product, onPlus, onMinus, onRemove }: PropsCartItem) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 border rounded-xl">
      <img
        src={product.images[0] ?? "https://via.placeholder.com/80"}
        alt={product.title}
        className="w-20 h-20 object-cover rounded-lg col-span-1"
      />

      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex gap-3 items-center justify-between">
          <h2 className="font-medium line-clamp-1">{product.title}</h2>
          <button
            onClick={() => onRemove(product.id)}
            className="bg-destructive p-1 rounded"
          >
            <Trash size={16} color="#fff" />
          </button>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <button
            onClick={() => onMinus(product.id)}
            className="p-1 border rounded"
          >
            <Minus size={16} />
          </button>

          <span className="w-6 text-center">{product.count}</span>

          <button
            onClick={() => onPlus(product.id)}
            className="p-1 border rounded"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
