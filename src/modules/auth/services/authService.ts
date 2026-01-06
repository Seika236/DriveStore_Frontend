import { $api } from "@/http/index";
import constants from "../constants";
import { AuthRequestType } from "@/modules/auth/types/AuthServiceType";
import { ResponseUserDTO } from "@/modules/auth/types/ResponseUserDTO";
import { AxiosResponse } from "axios";

class AuthService {
  async authorization(data: AuthRequestType): Promise<void> {
    return await $api.post(constants.AUTHORIZATION_URL, data);
  }

  async login(data: AuthRequestType): Promise<AxiosResponse<ResponseUserDTO>> {
    return await $api.post(constants.LOGIN_URL, data);
  }

  async logout(): Promise<void> {
    return await $api.post(constants.LOGIN_URL);
  }

  async checkAuth(): Promise<AxiosResponse<ResponseUserDTO>> {
    return await $api.get<ResponseUserDTO>(constants.CHECK_URL);
  }

  async resendEmail(email: string): Promise<AxiosResponse<void>> {
    return await $api.get(constants.RESEND_EMAIL(email));
  }
}

export default new AuthService();
