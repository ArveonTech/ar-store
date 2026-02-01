import axios from "axios";

export const apiRequest = async (
  method = "GET",
  resource: string,
  data = null,
  query = "",
  options = {},
) => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;
  const url = query
    ? `${baseUrl}/${resource}?${query}`
    : `${baseUrl}/${resource}`;

  try {
    const response = await axios({
      method,
      url,
      data,
      ...options,
    });

    return response.data;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "response" in error) {
      const err = error as {
        response?: {
          message?: string;
        };
      };

      throw new Error(err.response?.message || "Something went wrong");
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Unknown error");
  }
};
