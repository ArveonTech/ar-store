import { Toaster } from "@/components/ui/sonner";
import ErrorComponent from "@/features/others/error";
import LoadingComponent from "@/features/others/loading";
import useGetProduct from "@/features/product/api/use-get-product";
import CarouselComponent from "@/features/product/components/carousel";
import CommentsComponent from "@/features/product/components/comment";
import FooterComponent from "@/features/product/components/footer";
import HeaderComponent from "@/features/product/components/header";
import MainComponent from "@/features/product/components/main";
import { status } from "@/features/product/store/add-cart-product-slice";
import { useAppDispatch, useAppSelector } from "@/stores/hook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const ProductPage = () => {
  const accessToken = localStorage.getItem("access-token");
  const statusAddCartSlice = useAppSelector(
    (state) => state.statusAddCartSlice,
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const {
    data: dataGetProduct,
    isLoading: loadingGetProduct,
    isError: isErrorGetProduct,
  } = useGetProduct({ productId: Number(id), accessToken });

  useEffect(() => {
    if (statusAddCartSlice) {
      toast.success(statusAddCartSlice);
      dispatch(status(""));
    }
  }, [statusAddCartSlice]);

  return (
    <div className="mb-20 relative">
      <HeaderComponent product={dataGetProduct} />
      {loadingGetProduct ? (
        <LoadingComponent classname={"mt-50"} />
      ) : (
        <>
          {isErrorGetProduct ? (
            <ErrorComponent classname="h-screen" />
          ) : (
            <>
              <div className="grid md:grid-cols-2">
                <section className="mt-20">
                  <CarouselComponent images={dataGetProduct?.images ?? []} />
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
              <FooterComponent product={dataGetProduct} />
            </>
          )}
        </>
      )}
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default ProductPage;
