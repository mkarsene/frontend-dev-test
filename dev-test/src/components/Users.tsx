import { Box, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import axios from "axios";
import { useEffect, useState } from 'react';
import ComponentLoader from './ComponentLoader';

interface User {
    name: string;
    email: string;
    phone_number: number,
    roles: [];
    is_active: boolean;
}


const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errrorMessage, setErrorMessage] = useState<string>("")

    const getAllUsers = async () => {
        setIsLoading(true)
        axios.get(`${process.env.REACT_APP_BASE_URL}/users`, { params: { store_id: "ea7aa965-bef1-4c38-b2b3-e62c865b5a7a", limit: 50 } }
        ).then((res) => {
            setUsers(res.data.employees)
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            setErrorMessage(error.message)

        })
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    if (isLoading) {
        return (<ComponentLoader />)
    }

    return (
        <Box bg="white" p="10px">
            {users.map((user: User) => (<>
                <Card w="100vw" mt="30px" >
                    <Text textAlign="center">{errrorMessage}</Text>
                    <CardHeader>
                        <Heading size='md'>{user.name}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Role
                                </Heading>
                                <Flex justifyContent="space-between">
                                    <Text pt='2' fontSize='sm'>
                                        {user.roles}
                                    </Text>
                                    <Text >
                                        {user.is_active === true ? (<Text bg="green.200" fontWeight="bold" >Active</Text>) : "Inactive"}
                                    </Text>
                                </Flex>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Email
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    {user.email}
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Phone
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    {user.phone_number
                                    }
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </>))}

        </Box>
    )
}

export default Users
