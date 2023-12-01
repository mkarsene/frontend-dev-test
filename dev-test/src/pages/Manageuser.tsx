import { Button, Flex, Heading } from '@chakra-ui/react'
import Users from '../components/Users'

const Manageuser = () => {
    return (
        <div>
            <Heading textAlign="center">
                Manage user
            </Heading>
            <Flex p="10px">
                <Button w="100vw" colorScheme='blue'>ADD</Button>
            </Flex>
            <Users />
        </div>
    )
}

export default Manageuser