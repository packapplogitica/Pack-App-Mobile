import { useQuery, useMutation, UseQueryOptions } from "@tanstack/react-query";
import { apiFetch } from "./apiClient";

// Hook genérico para GET
export function useApiQuery<T>(
  key: string[], // clave de cache
  path: string,
  options?: UseQueryOptions<T>
) {
  return useQuery<T>({
    queryKey: key,
    queryFn: () => apiFetch(path),
    ...options,
  });
}

// Hook genérico para POST / PUT / DELETE
export function useApiMutation<T>(
  path: string,
  method: "POST" | "PUT" | "DELETE" = "POST"
) {
  return useMutation<T, Error, any>({
    mutationFn: (body: any) =>
      apiFetch(path, {
        method,
        body: JSON.stringify(body),
      }),
  });
}
