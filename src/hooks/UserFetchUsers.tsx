import { useQuery } from "@tanstack/react-query";
import { Users } from "../types";
import { axiosInstance } from "../services/user";

interface FetchUsersOptions {
  store_id?: string;
  limit?: number;
}

const useFetchUsers = (options: FetchUsersOptions = {}) => {
  const usersQuery = useQuery<Users>({
    queryKey: ['users', options.store_id, options.limit],
    queryFn: () => {
      return axiosInstance.get('users', {
        params: {
          store_id: options.store_id,
          limit: options.limit,
        },
      }).then(res => res.data);
    },
  });

  return usersQuery;
}

export default useFetchUsers;
