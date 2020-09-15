import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';
import StoredData from '../constants/StoredData';

const axiosInstance = axios.create({
  baseURL: API_KEY,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = await StoredData.get(StoredData.KEY.OAUTH.ACCESS_TOKEN);
      // eslint-disable-next-line no-param-reassign
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
