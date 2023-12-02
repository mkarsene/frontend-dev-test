import axios from 'axios';
import { RecoilState, atom } from 'recoil';
import { User } from '../types';

export const userState = atom({
  key: 'userState',
  default: { id: '', PIN: '', IsVerified: true },
}) as RecoilState<User | null>;

const Authenticate = {
  getUser: (): User | null => {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  },

  setUser: (value: User): void => {
    const userString = JSON.stringify(value);
    localStorage.setItem('user', userString);
  },

  removeUser: (): void => {
    localStorage.removeItem('user');
  },
};

export const axiosInstance = axios.create({
  baseURL: 'https://bewty7mih9.execute-api.eu-central-1.amazonaws.com',
});

export const userStateSelector: RecoilState<User | null> = userState;

export default Authenticate;
