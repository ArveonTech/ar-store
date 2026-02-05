import ErrorComponent from "@/features/others/error";
import LoadingComponent from "@/features/others/loading";
import useGetProduct from "@/features/product/api/use-get-product";
import CarouselComponent from "@/features/product/components/carousel";
import CommentsComponent from "@/features/product/components/comment";
import HeaderComponent from "@/features/product/components/header";
import MainComponent from "@/features/product/components/main";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const accessToken = localStorage.getItem("access-token");
  const { id } = useParams();

  const {
    data: dataGetProduct,
    isLoading: loadingGetProduct,
    isError: isErrorGetProduct,
  } = useGetProduct({ productId: Number(id), accessToken });

  console.info(dataGetProduct);
  return (
    <div className="mb-20">
      <HeaderComponent />
      {loadingGetProduct ? (
        <LoadingComponent classname={"mt-50"} />
      ) : (
        <>
          {isErrorGetProduct ? (
            <ErrorComponent classname="h-screen" />
          ) : (
            <div className="grid md:grid-cols-2">
              <section className="mt-20">
                <CarouselComponent images={dataGetProduct?.images} />
              </section>
              <section>
                <MainComponent product={dataGetProduct} />
                <section className="space-y-6 px-15 md:pr-10 md:pl-0 mt-10">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>

                  {dataGetProduct?.reviews &&
                    dataGetProduct.reviews.map((review, index) => (
                      <CommentsComponent review={review} key={index} />
                    ))}
                </section>
              </section>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductPage;
