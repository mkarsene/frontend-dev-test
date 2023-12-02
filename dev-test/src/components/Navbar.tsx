import { Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Login from '../Auth/Login'
const Navbar = () => {
  return (
    <Flex bg="gray.200" as="nav" p="10px" alignItems="center" gap="10px">
      <Heading as="h1" color="blue"> <Link to={'/'}>
        Bofrak
      </Link></Heading>
      <Spacer />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={'/manage_user'}>
              Mange User
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={'/manage_thresholds'}>
              Manage thresholds
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Login />
    </Flex>
  )
}

export default Navbar