/* eslint-disable */
import axios from 'axios';
import Auth from './auth';

export const base_url = import.meta.env.VITE_APP_BASE_URL;

const Api = axios.create({
  baseURL: base_url
});

Api.interceptors.request.use(
  (config) => {
    if (Auth.isAuthenticated()) {
      config.headers['Authorization'] = `Bearer ${Auth.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;
  
//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         const token = await authService.refreshAccessToken();
//         const newRequest = {
//           ...originalRequest,
//           headers: {
//             ...originalRequest.headers,
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         return Api(newRequest);
//       }
  
//       return Promise.reject(error);
//     }
//   );

export default Api;
