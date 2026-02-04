import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useParamsControllers from "@/utils/others/use-get-params-controllers";

interface PropsFooter {
  isErrorGetProducts: boolean;
  total: number;
  page: number;
}

const FooterComponent = ({ isErrorGetProducts, total, page }: PropsFooter) => {
  const { getAllParam, setManyParam } = useParamsControllers();

  const totalPage = Math.ceil(total / 10);

  const handlePrevPage = () => {
    if (!page || page <= 1) return;

    const current = getAllParam();
    const currentObj = Object.fromEntries(current.entries());

    setManyParam({
      ...currentObj,
      page: String(page - 1),
      limit: String(10),
    });
  };

  const handleNextPage = ({ pageNext }: { pageNext: number }) => {
    if (!page || page >= totalPage) return;

    const current = getAllParam();
    const currentObj = Object.fromEntries(current.entries());

    setManyParam({
      ...currentObj,
      page: String(page + pageNext),
      limit: String(10),
    });
  };

  return (
    <footer className="mb-20">
      {isErrorGetProducts
        ? ""
        : total !== 0 && (
            <Pagination
              className={`mt-14 col-start-2 col-span-3 lg:col-start-2 lg:col-span-4`}
            >
              <PaginationContent>
                {page <= 1 ? (
                  ""
                ) : (
                  <PaginationItem>
                    <PaginationPrevious
                      className={`cursor-pointer`}
                      onClick={handlePrevPage}
                    />
                  </PaginationItem>
                )}
                {page - 1 !== 0 && page - 1 <= totalPage ? (
                  <PaginationItem>
                    <PaginationLink
                      onClick={handlePrevPage}
                      className={`cursor-pointer`}
                    >
                      {page - 1}
                    </PaginationLink>
                  </PaginationItem>
                ) : (
                  ""
                )}
                <PaginationItem>
                  <PaginationLink isActive={true}>{page}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                {page + 2 <= totalPage ? (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => handleNextPage({ pageNext: 2 })}
                      className={`cursor-pointer`}
                    >
                      {page + 2}
                    </PaginationLink>
                  </PaginationItem>
                ) : (
                  ""
                )}
                <PaginationItem>
                  {page >= totalPage ? (
                    ""
                  ) : (
                    <PaginationNext
                      className={`cursor-pointer`}
                      onClick={() => handleNextPage({ pageNext: 1 })}
                    />
                  )}
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
    </footer>
  );
};

export default FooterComponent;
