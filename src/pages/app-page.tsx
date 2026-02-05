import { Button } from "@/components/ui/button";
import useGetProducts from "@/features/app/api/use-get-products";
import useGetUser from "@/features/app/api/use-get-user";
import CarouselComponent from "@/features/app/components/carousel";
import HeaderComponent from "@/features/app/components/header-products";
import NavigationComponent from "@/features/app/components/navbar";
import ProductComponent from "@/features/app/components/product";
import ErrorComponent from "@/features/others/error";
import LoadingComponent from "@/features/others/loading";
import ProductSkeleton from "@/features/others/skeleton";
import { Link } from "react-router-dom";

const AppPage = () => {
  const accessToken = localStorage.getItem("access-token");

  const {
    data: dataGetUser,
    isLoading: loadingGetUser,
    isError: isErrorGetUser,
  } = useGetUser({
    accessToken,
  });
  const {
    data: dataGetProducts,
    isLoading: loadingGetProducts,
    isError: isErrorGetProducts,
  } = useGetProducts({ limit: 10, skip: 0, accessToken });

  console.info(dataGetProducts);
  return (
    <>
      {loadingGetUser ? (
        <div className="h-screen flex items-center ">
          <LoadingComponent />
        </div>
      ) : (
        <>
          <NavigationComponent dataUser={dataGetUser} />
          {isErrorGetUser || isErrorGetProducts ? (
            <ErrorComponent classname={`h-screen`} />
          ) : (
            <>
              <section className="px-15 mt-10">
                <CarouselComponent />
              </section>
              <section className="px-15 mt-20">
                <HeaderComponent />
              </section>
              {loadingGetProducts ? (
                <section className="px-20 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <ProductSkeleton key={i} />
                  ))}
                </section>
              ) : (
                <>
                  {dataGetProducts && (
                    <>
                      <section className="px-20 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
                        {dataGetProducts?.products.map((product, index) => (
                          <ProductComponent product={product} key={index} />
                        ))}
                      </section>
                      <div className="flex justify-center mt-10 mb-20 ">
                        <Link to={`/products`}>
                          <Button className="cursor-pointer">
                            View All...
                          </Button>
                        </Link>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default AppPage;
