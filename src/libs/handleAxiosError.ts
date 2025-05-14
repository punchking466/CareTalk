import { isAxiosError } from "axios";

export function handleAxiosError(error: unknown) {
  if (isAxiosError(error)) {
    return {
      status: error.response?.status ?? 500,
      body: error.response?.data ?? { success: false },
    };
  }

  return {
    status: 500,
    body: { success: false, message: "Unknown error occurred" },
  };
}
