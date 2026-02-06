const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-50 text-center">
      <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-muted-foreground mb-6">
        Looks like you haven’t added any products yet.
      </p>

      <a
        href="/app"
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
      >
        Continue shopping
      </a>
    </div>
  );
};

export default EmptyCart;
