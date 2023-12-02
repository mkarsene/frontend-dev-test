import { useToast } from '@chakra-ui/react';

const useCustomToast = () => {
  const toast = useToast();

  const showToast = (
    status: 'info' | 'error' | 'success' | 'warning' | 'loading' | undefined,
    message: string
  ) => {
    toast({
      title: status?.toUpperCase(),
      description: message,
      status: status,
      isClosable: true,
    });
  };

  return showToast;
};

export default useCustomToast;
