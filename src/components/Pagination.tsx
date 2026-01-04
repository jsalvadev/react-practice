type PaginationProps = {
  currentPage: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  prevPage,
  nextPage,
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between border-t border-white/10 px-4 py-3 sm:px-6"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-300">
          Page <span className="font-medium">{currentPage}</span> of{" "}
          <span className="font-medium">{totalPages}</span>
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          disabled={currentPage === 1}
          onClick={prevPage}
          className="disabled:cursor-not-allowed hover: cursor-pointer relative inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-white/5 hover:bg-white/20"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={nextPage}
          className="disabled:cursor-not-allowed hover:cursor-pointer relative ml-3 inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-white/5 hover:bg-white/20"
        >
          Next
        </button>
      </div>
    </nav>
  );
}
