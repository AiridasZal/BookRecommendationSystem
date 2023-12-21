import axios from "axios";

export interface BookDetails {
  book_id: string;
  title: string;
  authors: string;
  average_rating: number;
  ratings_count: number;
  image_url: string;
  pages: number;
  description: string;
  genres: string[];
}

export interface RecommendationParams {
  bookId: string;
  method: string;
  topN: number;
}

export interface RecommendationResult {
  book_id: string;
  title: string;
  authors: string;
  average_rating: number;
  ratings_count: number;
  image_url: string;
  genres: string[];
}

const BASE_URL = process.env.REACT_APP_BACKEND_DOMAIN;

export const apiClient = {
  async searchBooks(query: string): Promise<BookDetails[]> {
    try {
      if (!query) throw new Error("No query provided");
      const response = await axios.get(`${BASE_URL}/search?query=${query}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              throw new Error("Bad request. Please check your query.");
            case 404:
              throw new Error("No results found for the given query.");
            case 500:
              throw new Error("Server error. Please try again later.");
            default:
              throw new Error("An unexpected error occurred.");
          }
        }
      }
      throw new Error("An error occurred while fetching data.");
    }
  },
  async getBookDetails(bookId: string): Promise<BookDetails> {
    try {
      if (!bookId) throw new Error("No book ID provided");
      const response = await axios.get(`${BASE_URL}/book/${bookId}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              throw new Error("Bad request. Please check your query.");
            case 404:
              throw new Error("No details found for this book.");
            case 500:
              throw new Error("Server error. Please try again later.");
            default:
              throw new Error("An unexpected error occurred.");
          }
        }
      }
      throw new Error("An error occurred while fetching data.");
    }
  },
  async getRecommendations({
    bookId,
    method,
    topN,
  }: RecommendationParams): Promise<RecommendationResult[]> {
    const response = await axios.get(`${BASE_URL}/recommend`, {
      params: { book_id: bookId, method, top_n: topN },
    });
    return response.data;
  },
};
