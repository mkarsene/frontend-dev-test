import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../services/user';
import { UserData } from '../types';

interface FetchUserOptions {
  store_id?: string;
  userId?: string;
}

const useGetUser = (options: FetchUserOptions = {}) => {
  const userQuery = useQuery<UserData>({
    queryKey: ['user', options.store_id || '', options.userId || ''],
    queryFn: () => {
      return axiosInstance
        .get(`users/${options.userId}`, {
          params: {
            store_id: options.store_id,
          },
        })
        .then((res) => res.data);
    },
  });

  return userQuery;
};

export default useGetUser;
