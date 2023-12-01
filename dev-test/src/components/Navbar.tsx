import { Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Flex bg="gray.200" as="nav" p="10px" alignItems="center" gap="10px">
      <Heading as="h1" color="blue"> Bofrak </Heading>
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
          <Link to={'/manage_thresholds'}>
          Manage thresholds
            </Link>
        </MenuList>
      </Menu>
      <Button bg="black" color="white">Logout</Button>
    </Flex>
  )
}

export default Navbar