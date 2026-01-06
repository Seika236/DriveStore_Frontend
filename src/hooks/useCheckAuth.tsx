import { AuthService } from "@/modules/auth";
import { checkIsAdmin } from "../lib/checkIsAdmin";
import { authStore } from "@/store/authStore";
import { UseRequest } from "@/hooks/useRequest";
import { AxiosResponse } from "axios";
import { IFavorite } from "../types/models/IFavorite";
import { AddFavoriteRequest } from "@/modules/listingInfo/types/ApiRequestTypes";
import { ResponseUserDTO } from "@/modules/auth/types/ResponseUserDTO";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ArticleService from "@/services/articleService";

export function UseCheckAuth() {
  const { setUser, setIsAuth, setIsAdmin, setIsLoading } = authStore();

  const { fetchFunction, isError } = UseRequest<
    AxiosResponse<ResponseUserDTO>,
    void
  >({
    request: AuthService.checkAuth,
    successCb: (data) => {
      const userRoles = data.data.role.map((role) => role.name);
      const isAdmin = checkIsAdmin(userRoles);
      if (isAdmin) setIsAdmin(true);
      else {
        setIsAdmin(false);
      }
      setIsAuth(true);
      setUser(data.data);
      setIsLoading(false);
    },
    successText: "Добро пожаловать!",
  });

  useEffect(() => {
    if (isError) {
      setIsLoading(false);
    }
  }, [isError]);

  useEffect(() => {
    fetchFunction();
  }, []);
}
