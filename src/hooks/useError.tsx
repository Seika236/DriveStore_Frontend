import { UseToaster } from "@/hooks/useToaster";
import { AxiosError } from "axios";

export function UseError() {
  const { errorMassage } = UseToaster();

  const throwError = (error: Error) => {
    if (error instanceof AxiosError) {
      return errorMassage(error.response?.data?.message || error.message);
    }
    errorMassage("не получилось обработать запрос повторите попытку позже");
  };

  return { throwError };
}
