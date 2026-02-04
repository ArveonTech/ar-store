import useParamsControllers from "@/utils/others/use-get-params-controllers";

const useFilter = () => {
  const { getAllParam, setManyParam } = useParamsControllers();

  const setSearchInputParam = ({
    debounceValue,
  }: {
    debounceValue: string;
  }) => {
    const current = getAllParam();
    const currentObj = Object.fromEntries(current.entries());

    setManyParam({
      ...currentObj,
      search: debounceValue,
    });
  };

  return {
    setSearchInputParam,
  };
};

export default useFilter;
