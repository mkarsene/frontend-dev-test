import { Button, Flex, Heading } from '@chakra-ui/react'
import Users from '../components/Users'
import { Link } from 'react-router-dom'

const Manageuser = () => {
    return (
        <div>
            <Heading textAlign="center">
                Manage user
            </Heading>
            <Flex p="10px">
                <Link to={'/create_user'}>
                    <Button w="100vw" colorScheme='blue'>
                        ADD
                    </Button>
                </Link>
            </Flex>
            <Users />
        </div>
    )
}

export default Manageuser