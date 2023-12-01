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
} from '@chakra-ui/react';
import { SlArrowDown } from 'react-icons/sl';

const Navbar = () => {
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

      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={() => console.log('Toggle menu')}
      >
        ☰
      </Box>

      <Spacer />

      <Box
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        padding="0.3rem"
      >
        <Menu>
          <MenuButton mr={4} as={Button} rightIcon={<SlArrowDown />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Manage Users</MenuItem>
            <MenuItem>Manage Thresholds</MenuItem>
          </MenuList>
        </Menu>
        <Button bg="black" color="white" mr={4}>
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
