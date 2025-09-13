import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

/**
 * The only instance of our Singleton
 */
let instance: ReturnType<typeof makeSingleton>;

/** Closure of the singleton's value to keep it private */
const makeSingleton = (initial: AxiosInstance) => {
  const _value: AxiosInstance = initial;

  /** Only the accessors are returned */
  return {
    get: (): AxiosInstance => _value,
  };
};

/**
 * Retrieves the only instance of the Singleton
 * and allows a once-only initialization
 */
const axiosClient = (config?: CreateAxiosDefaults) => {
  if (!instance) {
    instance = makeSingleton(axios.create(config ?? {
      baseURL: `https://${process.env.API_URL}/admin-api/v1`,
    }));
    return instance;
  }

  return instance;
};

export default axiosClient;
