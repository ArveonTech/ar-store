import HeaderComponent from "@/features/products/components/header";
import SearchComponent from "@/features/products/components/search";
import ProductsComponent from "@/features/products/components/products";
import useParamsControllers from "@/utils/others/use-get-params-controllers";
import ErrorComponent from "@/features/others/error";
import useGetProducts from "@/features/products/api/use-get-products";
import FooterComponent from "@/features/products/components/footer";
import EmptyComponent from "@/features/products/components/empty";

const ProductsPage = () => {
  const { getParam } = useParamsControllers();
  const accessToken = localStorage.getItem("access-token");

  const searchParams = getParam("search") || "";
  const limitParams = Number(getParam("limit")) || 10;
  const pageParams = Number(getParam("page")) || 1;

  let limitPage = 0;

  if (isNaN(limitParams) || limitParams > 10 || limitParams < 1) {
    limitPage = 10;
  } else {
    limitPage = limitParams;
  }

  const query = {
    search: searchParams,
    limit: limitPage,
    skip: (pageParams - 1) * limitPage,
  };

  const {
    data: dataGetProducts,
    isLoading: loadingGetProducts,
    isError: isErrorGetProducts,
  } = useGetProducts({ query, accessToken });

  return (
    <>
      <HeaderComponent />
      <SearchComponent />
      {isErrorGetProducts ? (
        <ErrorComponent classname={`h-screen`} />
      ) : (
        <>
          {dataGetProducts?.total === 0 ? (
            <EmptyComponent />
          ) : (
            <section className="mt-20">
              <ProductsComponent
                loadingGetProducts={loadingGetProducts}
                dataGetProducts={dataGetProducts}
              />
            </section>
          )}
        </>
      )}
      <FooterComponent
        isErrorGetProducts={isErrorGetProducts}
        page={pageParams}
        total={dataGetProducts?.total || 0}
      />
    </>
  );
};

export default ProductsPage;
