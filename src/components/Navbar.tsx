import { useEffect } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Menu,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { SlArrowDown } from 'react-icons/sl';
import Login from './modals/Login';
import { VerifyData, User } from '../types';
import useVerify from '../hooks/UseVerify';
import useCustomToast from './toasts/Toasts';
import Authenticate, { userStateSelector } from '../services/user';
import useGetUser from '../hooks/useGetUser';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate: verifyUser, isSuccess, isLoading } = useVerify();
  const { data: currentUser } = useGetUser({
    userId: Authenticate.getUser()?.id,
    store_id: 'ea7aa965-bef1-4c38-b2b3-e62c865b5a7a',
  });
  const showToast = useCustomToast();

  const [user, setUser] = useRecoilState<User | null>(userStateSelector);

  const handleVerifyUser = (info: VerifyData) => {
    try {
      verifyUser(info);

      if (isSuccess) {
        setUser({ id: info.id, PIN: info.PIN, IsVerified: true });
        Authenticate.setUser({ id: info.id, PIN: info.PIN, IsVerified: true });
      }

      handleToast(isSuccess, isLoading);
    } catch (error) {
      showToast('error', 'Server error');
    }
  };

  const handleToggleMenu = () => {
    console.log('Toggle menu');
  };

  const handleToast = (isSuccess: boolean, isLoading: boolean) => {
    setTimeout(() => {
      if (!isLoading) {
        isSuccess
          ? showToast('success', 'User verified successfully')
          : showToast('error', 'Error verifying user');
        onClose();
      }
    }, 2500);
  };

  useEffect(() => {
    return setUser({
      id: currentUser?.id as string,
      PIN: currentUser?.PIN as string,
      IsVerified: true,
    });
  }, [currentUser?.PIN, currentUser?.id, setUser]);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="white"
    >
      <Flex align="center" ml={5}>
        <Heading as="h1" size="lg" color="#0000ff">
          Bofrak
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggleMenu}>
        ☰
      </Box>

      <Spacer />

      <Box
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        padding="0.3rem"
      >
        {user?.id && (
          <Menu>
            <MenuButton mr={4} as={Button} rightIcon={<SlArrowDown />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/manage-users">Manage Users</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/manage-thresholds">Manage Thresholds</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
        <Login
          handleVerifyUser={handleVerifyUser}
          isLoggedIn={!!user?.id}
          loading={isLoading}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
