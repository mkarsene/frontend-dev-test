import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import Users from '../components/Users'
import { Link } from 'react-router-dom'
import { AddIcon} from '@chakra-ui/icons'

const Manageuser = () => {
    return (
        <div>
            <Heading textAlign="center">
                Manage user
            </Heading>
            <Flex p="10px">
                <Link to={'/create_user'}>
                    <Button w="100vw" colorScheme='blue'>
                       <Text mr="10px"> <AddIcon /></Text>
                        ADD
                    </Button>
                </Link>
            </Flex>
            <Users />
        </div>
    )
}

export default Manageuser