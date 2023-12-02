import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { Key, VerifyData } from '../types';
import { axiosInstance } from '../services/user';

const useVerify = (): UseMutationResult<void, Error, VerifyData, Key> & {
  isLoading: boolean;
} => {
  const mutation = useMutation<void, Error, VerifyData, Key>({
    mutationKey: ['verify'],
    mutationFn: (userData: VerifyData) =>
      axiosInstance.post('/users/verify', userData)
  });

  return {
    ...mutation,
    isLoading: mutation.status === 'pending',
  };
};

export default useVerify;
