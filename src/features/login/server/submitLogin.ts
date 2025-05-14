import { axiosInstance } from "@/libs/axios";
import { handleAxiosError } from "@/libs/handleAxiosError";

export async function submitLogin(email: string, password: string) {
  try {
    const res = await axiosInstance.post("/api/login", { email, password });

    return {
      status: res.status,
      body: res.data,
    };
  } catch (error) {
    return handleAxiosError(error);
  }
}
