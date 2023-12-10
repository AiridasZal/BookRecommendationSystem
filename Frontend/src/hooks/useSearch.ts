import { useQuery } from "@tanstack/react-query";
import { apiClient, Book } from "../services/api-client";

export const useSearchBooks = (query: string) => {
  return useQuery<Book[], Error>({
    queryKey: ["searchBooks", query],
    queryFn: () => apiClient.searchBooks(query),
    enabled: !!query,
  });
};
