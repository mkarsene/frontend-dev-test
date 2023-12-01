import { Box, Button, Card, CardBody, CardHeader, Checkbox, Heading, Input, Stack, StackDivider, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import Loading from './Loading'

const CreateUserForm: React.FC = () => {
    const id = "ea7aa965-bef1-4c38-b2b3-e62c865b5a7a"
    const role = [" MANAGER", "ADMIN", "WAITER", "CASHIER", "RECEIPT_CHECKER"]
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [phone_number, setPhone_Number] = useState<string>()
    const [email, setEmail] = useState<string>("")
    const [username, setUserName] = useState<string>("")
    const [selectedRole, setSelectedRole] = useState<string>("")
    const [pin, setPin] = useState<string>()
    const [errorMessage, setErrorMessage] = useState<string>("")


    const createUsers = async () => {
        setIsLoading(true)
        axios.post("https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users", {
            roles: ["ADMIN"],
            name: name,
            phone_number: phone_number,
            email: email,
            username: username,
            store_id: id,
            PIN: pin
        })
            .then(function (response) {
                setIsLoading(false)
            })
            .catch(function (error) {
                setIsLoading(false)
                setErrorMessage(error.message)
            })
    }

    return (
        <Box bg="white" p="10px">
            <Card w="100vw" >
                <CardHeader>
                    <Stack spacing={3}>
                        <Heading size='sm'>Name</Heading>
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name' size='md' />
                        <Heading size='sm'>Email</Heading>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' size='md' />
                        <Heading size='sm'>User name</Heading>
                        <Input value={username} onChange={(e) => setUserName(e.target.value)} placeholder='user name' size='md' />
                        <Heading size='sm'>Phone</Heading>
                        <Input value={phone_number} onChange={(e) => setPhone_Number(e.target.value)} placeholder='Enter Phone' size='md' />
                        <Heading size='sm'>PIN</Heading>
                        <Input value={pin} onChange={(e) => setPin(e.target.value)} placeholder='Enter PIN (4 digits' size='md' />
                    </Stack>
                    <Stack spacing={5} direction='row' mt="15px">
                        {role.map((role) => (
                            <Checkbox colorScheme='red' value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} >
                                {role}
                            </Checkbox>
                        ))}
                    </Stack>
                </CardHeader>

            </Card>
            <Stack direction='row' spacing={4} align='center' mt="10px">
                <Button w="50vw" colorScheme='green' variant='solid' onClick={createUsers}>
                    {isLoading && isLoading ? <Loading /> : "Submit"}
                </Button>
                <Button w="50vw" colorScheme='blue' variant='solid'>
                    Back
                </Button>

            </Stack>
        </Box>
    )
}

export default CreateUserForm