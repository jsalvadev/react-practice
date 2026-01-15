import { useState } from "react";

type UseMutationOptions<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
};

export function useMutation<T, V = unknown>(
  mutationFn: (variables: V) => Promise<T>,
  options?: UseMutationOptions<T>
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const mutate = async (variables: V) => {
    try {
      setLoading(true);
      setError(null);
      const result = await mutationFn(variables);
      setData(result);
      options?.onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      setError(error);
      options?.onError?.(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  return {
    mutate,
    data,
    error,
    loading,
    reset,
  };
}
