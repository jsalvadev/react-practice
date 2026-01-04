import { useEffect, useRef, useState } from "react";

export const useFetch = <T,>(url: string, options: RequestInit = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(Boolean(url));
  const optionsRef = useRef(options);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError(null);

    fetch(url, {
      ...optionsRef.current,
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, ${response.status}`);
        }
        return response.json();
      })
      .then((data: T) => setData(data))
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== "AbortError") {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
};
