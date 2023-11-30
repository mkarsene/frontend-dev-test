import { Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex bg="gray.200" as="nav" p="10px" alignItems="center" gap="10px">
      <Heading as="h1" color="blue"> Bofrak </Heading>
      <Spacer />
      <Button color="black">Actions</Button>
      <Button bg="black" color="white">Logout</Button>
    </Flex>
  )
}

export default Navbar