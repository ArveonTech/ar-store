import useParamsControllers from "@/utils/others/use-get-params-controllers";

const useFilter = () => {
  const { setManyParam } = useParamsControllers();

  const setSearchInputParam = ({
    debounceValue,
  }: {
    debounceValue: string;
  }) => {
    // const current = getAllParam();
    // const currentObj = Object.fromEntries(current.entries());

    setManyParam({
      page: "1",
      limit: "10",
      search: debounceValue,
    });
  };

  return {
    setSearchInputParam,
  };
};

export default useFilter;
