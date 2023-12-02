import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Select,
  Input,
} from '@chakra-ui/react';
import { VerifyData } from '../../types';
import useFetchUsers from '../../hooks/UserFetchUsers';
import Authenticate, { userState } from '../../services/user';
import { useRecoilState } from 'recoil';

type Props = {
  handleVerifyUser: (data: VerifyData) => void;
  isLoggedIn: boolean;
  loading: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const Login = ({
  handleVerifyUser,
  isLoggedIn,
  loading,
  isOpen,
  onOpen,
  onClose,
}: Props) => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [PIN, setPIN] = useState<string>('');
  const [, setUser] = useRecoilState(userState);

  const { data, isLoading, error } = useFetchUsers({
    store_id: 'ea7aa965-bef1-4c38-b2b3-e62c865b5a7a',
    limit: 50,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const employeesOptions = data?.employees.map((employee) => (
    <option key={employee.id} value={employee.id}>
      {employee.name}
    </option>
  ));

  const handleValidate = () => {
    if (selectedUserId) {
      handleVerifyUser({ id: selectedUserId, PIN });
    }
  };

  const onLogout = () => {
    Authenticate.removeUser();
    setUser(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <Button
          isLoading={loading}
          onClick={onLogout}
          bg="black"
          color="white"
          mr={4}
        >
          Logout
        </Button>
      ) : (
        <Button
          isLoading={loading}
          onClick={onOpen}
          bg="black"
          color="white"
          mr={4}
        >
          Login
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              placeholder="Select User"
              onChange={(e) => setSelectedUserId(e.target.value)}
            >
              {employeesOptions}
            </Select>
            <Input
              placeholder="Enter PIN"
              type="password"
              size="md"
              value={PIN}
              onChange={(e) => setPIN(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              isLoading={loading}
              onClick={handleValidate}
              colorScheme="teal"
              variant="solid"
            >
              Validate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
