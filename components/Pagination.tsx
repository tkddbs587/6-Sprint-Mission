import { Dispatch, MouseEvent, SetStateAction } from "react";

const Pagination = ({
  lastPage,
  page,
  setPage,
}: {
  page: number;
  lastPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const handlePageClick = (e: MouseEvent<HTMLButtonElement>) => {
    const pageNumber = (e.target as HTMLButtonElement).value;
    setPage(Number(pageNumber));
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const start = page <= 3 ? 0 : page - 3;
  const end = page <= 3 ? 5 : page + 2;

  const arr = [...Array(lastPage).keys()];

  return (
    <div className="mt-40 flex justify-center gap-4">
      {page !== 1 && (
        <div
          onClick={handlePrevPage}
          className="flex h-40 w-40 items-center justify-center rounded-40 border-2 border-solid border-gray-200 text-16 font-semibold text-gray-200"
        >
          {"<"}
        </div>
      )}
      {arr.slice(start, end).map((pageIndex) => (
        <button
          key={pageIndex}
          value={pageIndex + 1}
          onClick={handlePageClick}
          className="h-40 w-40 rounded-40 border-2 border-solid border-gray-200 text-16 font-semibold text-gray-200"
        >
          {pageIndex + 1}
        </button>
      ))}
      {page !== lastPage && (
        <div
          onClick={handleNextPage}
          className="flex h-40 w-40 items-center justify-center rounded-40 border-2 border-solid border-gray-200 text-16 font-semibold text-gray-200"
        >
          {">"}
        </div>
      )}
    </div>
  );
};

export default Pagination;
