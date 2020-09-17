import axios from 'axios';
import { getUserFromLocalStorage } from '../utils/authUtils';
const axiosInstance = axios.create({
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
});
axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = await getUserFromLocalStorage();
      // eslint-disable-next-line no-param-reassign
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
export default axiosInstance;
