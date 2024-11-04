import { URL_LOGIN, URL_REGISTER } from "../constants/endpoints";
import http from "../utils/http";

export const authApi = {
  register(body: { password: string; username: string }) {
    return http.post(URL_REGISTER, body);
  },
  login(body: { username: string; password: string }) {
    return http.post(URL_LOGIN, body);
  },
};

export default authApi;
