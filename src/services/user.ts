import axios from 'axios';
import { UserData, VerifyData } from '../types';

const axiosInstance = axios.create({
  baseURL: 'https://bewty7mih9.execute-api.eu-central-1.amazonaws.com',
});

class APIClient<T> {
  createUser = async (user: UserData) => {
    const res = await axiosInstance.post<T>('/users', user);
    return res.data;
  };

  updateUser = async (user: UserData) => {
    const res = await axiosInstance.put<T>('/users', user);
    return res.data;
  };

  verifyUser = async (data: VerifyData) => {
    const res = await axiosInstance.post<T>('/users/verify', data);
    return res.data;
  };

  getUser = async (userId: string) => {
    const res = await axiosInstance.get<T>(`users/${userId}`);
    return res.data;
  };

  getUsers = async () => {
    const res = await axiosInstance.get<T>(`users`);
    return res.data;
  };
}

export default APIClient;
