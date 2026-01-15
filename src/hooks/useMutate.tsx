import { useState } from "react";

export const useMutate = <T, V = unknown>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const mutate = (payload: V, method: string = "POST") => {
    setLoading(true);
    setError(null);

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: T) => setData(data))
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    mutate,
    data,
    error,
    loading,
  };
};
