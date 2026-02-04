import { useSearchParams } from "react-router-dom";

const useParamsControllers = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (value === null || value === "") {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    setSearchParams(newParams);
  };

  const getParam = (key: string) => {
    return searchParams.get(key);
  };

  const getAllParam = () => {
    return searchParams;
  };

  const setManyParam = (obj: Record<string, string | null | undefined>) => {
    const newParams = new URLSearchParams(searchParams);

    for (const [key, value] of Object.entries(obj)) {
      if (value == null || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    }

    setSearchParams(newParams);
  };

  const deleteParam = (key: string) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete(key);

    setSearchParams(newParams);
  };

  return { getParam, setParam, getAllParam, setManyParam, deleteParam };
};

export default useParamsControllers;
