import { useEffect } from "react";

import Pagination from "../components/Pagination";
import UserCard from "../components/UserCard";
import UserSearch from "../components/UserSearch";

import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { useSearch } from "../hooks/useSearch";

import type { User } from "../types/user";
import usersData from "../data/users.json";

export default function UserPage() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const { data: apiData, error, loading } = useFetch<User[]>(API_URL);

  const data = error ? usersData : apiData;

  const { query, setQuery, filteredList } = useSearch<User>(data || [], "name");
  const {
    currentPage,
    totalPages,
    paginatedList,
    prevPage,
    nextPage,
    setCurrentPage,
  } = usePagination(filteredList, 4);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, setCurrentPage]);

  // if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <search className="flex justify-center pb-10">
        <UserSearch value={query} onChange={setQuery} />
      </search>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {paginatedList.length === 0 && !loading && (
          <div className="text-center">No users found</div>
        )}

        {paginatedList?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>

      <div className="mt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
}
