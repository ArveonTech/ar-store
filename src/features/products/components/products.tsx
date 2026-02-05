import ProductComponent from "@/features/products/components/product";
import ProductSkeleton from "@/features/others/skeleton";
import type { ProductsResponse } from "@/types/types";

interface PropsProducts {
  loadingGetProducts: boolean;
  dataGetProducts?: ProductsResponse;
}

const ProductsComponent = ({
  loadingGetProducts,
  dataGetProducts,
}: PropsProducts) => {
  return (
    <section>
      {loadingGetProducts ? (
        <section className="px-20 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </section>
      ) : (
        <>
          {dataGetProducts && (
            <section className="px-20 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
              {dataGetProducts?.products.map((product, index) => (
                <ProductComponent product={product} key={index} />
              ))}
            </section>
          )}
        </>
      )}
    </section>
  );
};

export default ProductsComponent;
