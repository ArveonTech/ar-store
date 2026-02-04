import { useState, useEffect } from "react";

interface PropsUseDebounce {
  value: string;
  delay: number;
}

const useDebounce = ({ value, delay }: PropsUseDebounce) => {
  const [debunceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debunceValue;
};

export default useDebounce;
