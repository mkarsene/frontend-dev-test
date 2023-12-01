import { Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import axios from "axios";
import { useEffect } from 'react';

const Users = () => {
// const id = "ea7aa965-bef1-4c38-b2b3-e62c865b5a7a"

//     const getAllUsers = async () => {
//         axios.get(`https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users/${id}`,
//         ).then((res) => {
//             console.log("data", res);

//         }).catch((error) => {
//             console.log("error", error.message);

//         })
//     }
//     useEffect(() => {
//         getAllUsers()
//     }, [])


    const createUsers = async () => {
        axios.post("https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users", {
            roles: ["ADMIN"],
            name: "One desire",
            phone_number: "097873647",
            email: "dee@gmail.com",
            username: "Dee one",
            store_id: "ea7aa965-bef1-4c38-b2b3-e62c865b5a7a",
            PIN: "1234"
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <Box bg="white" p="10px">
            <Card w="100vw" >
                <Button onClick={createUsers}>
submit
                </Button>
                <CardHeader>
                    <Heading size='md'>Client Report</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Summary
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                View a summary of all your clients over the last month.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Overview
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Check out the overview of your clients.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                See a detailed analysis of all your business clients.
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}

export default Users
