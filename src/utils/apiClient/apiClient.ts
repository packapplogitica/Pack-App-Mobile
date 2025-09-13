import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import axiosClient from "../axios";
import logger from "../logger/logger";

const axios = axiosClient().get();

const getConfig = (
  token: string,
  params: any = {}
): AxiosRequestConfig => {
  return {
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    params,
  };
};

export const handleError = <T>(error: T, method: string, path: string) => {
  const unit = `${method}:${path}`;

  if (isAxiosError(error)) {
    logger.error("api", unit, error.message);
  } else {
    logger.error("api", unit, error);
  }
};

const apiClient = {
  get: async (
    path: string,
    token: string,
    params: any = {}
  ) => {
    try {

      const config = getConfig(token, params);
      const { data }: AxiosResponse = await axios.get(path, config);
   
      logger.log("api", `get:${path}`, "success");

      return data;
    } catch (error) {
      handleError(error, "get", path);
      const { response }: any = error;
      return {
        notFound: true,
        error: response.data.message,
      };
    }
  },
  post: async (
    path: string,
    token: string,
    body?: any
  ) => {
    try {
      const config = getConfig(token);
      const { data }: AxiosResponse = await axios.post(path, body, config);

      logger.log("api", `post:${path}`, "success");

      return data.data;
    } catch (error) {
      handleError(error, "post", path);
    }
  },
  put: async () => {
    // @ToDo: implement axios path
  },
  delete: async () => {
    // @ToDo: implement axios delete
  },
};

export default apiClient;
