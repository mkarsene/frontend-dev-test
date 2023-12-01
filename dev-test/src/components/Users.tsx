import { Box,Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import axios from "axios";
import { useEffect } from 'react';

const Users = () => {
    const id = "ea7aa965-bef1-4c38-b2b3-e62c865b5a7a"

    const getAllUsers = async () => {
        axios.get("https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users",
        ).then((res) => {
            console.log("data", res);

        }).catch((error) => {
            console.log("error", error.message);

        })
    }
    useEffect(() => {
        getAllUsers()
    }, [])



    return (
        <Box bg="white" p="10px">
            <Card w="100vw" >
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
