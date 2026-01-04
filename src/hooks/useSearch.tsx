import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useSearch = <T,>(list: T[], searchProperty: keyof T) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const filteredList = useMemo(() => {
    if (!debouncedQuery) return list;

    return list.filter((item) =>
      String(item[searchProperty])
        .toLowerCase()
        .includes(debouncedQuery.toLowerCase()),
    );
  }, [list, debouncedQuery, searchProperty]);

  return {
    query,
    setQuery,
    filteredList,
  };
};
