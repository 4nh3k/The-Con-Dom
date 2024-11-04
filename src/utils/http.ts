import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from "axios";
import { toast } from "react-toastify";
import { URL_BASE } from "../constants/endpoints";

class Http {
  public instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: URL_BASE,
      timeout: 50000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        // Get the access token from local storage
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          toast.error("Some things went wrong!");
        }
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response) {
          console.log("error", error.response);

          // Handle unauthorized error
          if (error.response.status === HttpStatusCode.Unauthorized) {
            toast.error("Your session has expired. Please log in again.");
            // Redirect to login page if needed
            const redirect = window.location.pathname;
            window.location.href = `/login?redirect=${redirect}`;
          }
        }
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
