import { Input } from "@/components/ui/input";
import useParamsControllers from "@/utils/others/use-get-params-controllers";
import { useEffect, useState } from "react";
import useDebounce from "../utils/use-debounce";
import useFilter from "../utils/use-filter";

const SearchComponent = () => {
  const { getParam } = useParamsControllers();
  const { setSearchInputParam } = useFilter();
  const searchParams = getParam("search") || "";

  const [searchInput, setSearchInput] = useState<string>(searchParams);
  const debounceValue = useDebounce({ value: searchInput, delay: 2000 });

  useEffect(() => {
    setSearchInputParam({ debounceValue });
  }, [debounceValue]);

  return (
    <div className="px-15 mt-10">
      <Input
        value={searchInput}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchInput(event.currentTarget.value)
        }
        placeholder="Search product"
        className="placeholder:italic placeholder:opacity-70"
      />
    </div>
  );
};

export default SearchComponent;
