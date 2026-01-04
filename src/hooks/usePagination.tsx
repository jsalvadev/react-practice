import { useState } from "react";

export const usePagination = <T,>(list: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedList = list.slice(startIndex, endIndex);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  const prevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

  const nextPage = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);

  return {
    currentPage,
    totalPages,
    paginatedList,
    prevPage,
    nextPage,
    setCurrentPage,
  };
};
