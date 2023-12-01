import { Box, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import axios from "axios";
import { useEffect, useState } from 'react';

interface Users {
    name: string;
    email: string;
    phone_number: number,
    roles: [];
    is_active: boolean;
}


const Users = () => {
    const [users, setUsers] = useState([])
    const getAllUsers = async () => {
        axios.get('https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users', { params: { store_id: "ea7aa965-bef1-4c38-b2b3-e62c865b5a7a", limit: 50 } }
        ).then((res) => {
            console.log("data", res.data.employees);
            setUsers(res.data.employees)
        }).catch((error) => {
            console.log("error", error);

        })
    }
    useEffect(() => {
        getAllUsers()
    }, [])



    return (
        <Box bg="white" p="10px">
            {users.map((user: Users) => (<>
                <Card w="100vw" mt="30px" >
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
