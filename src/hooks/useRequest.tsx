"use client";
import { useCallback, useState } from "react";
import { AxiosError } from "axios";
import { UseError } from "@/hooks/useError";
import { UseToaster } from "@/hooks/useToaster";

type Props<T, D> = {
  request: (data: D) => Promise<T>;
  successText?: string;
  successCb?: (data: T) => void;
};

export function UseRequest<T, D>({
  request,
  successCb,
  successText,
}: Props<T, D>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { throwError } = UseError();
  const { successMassage } = UseToaster();

  const fetchFunction = useCallback(
    (data: D) => {
      setIsLoading(true);
      request(data)
        .then((data) => {
          if (successText) successMassage(successText);
          if (successCb) successCb(data);
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            return throwError(error);
          }
          setIsError(true);
          throwError(error);
        })
        .finally(() => setIsLoading(false));
    },
    [successCb, successText, request],
  );

  return {
    isLoading,
    fetchFunction,
    isError,
  };
}
