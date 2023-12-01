import { Button, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios";

interface User {
    id: string;
    name: string;

}

const Login = () => {
    const [users, setUsers] = useState([])
    console.log("user id", users);

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errrorMessage, setErrorMessage] = useState<string>("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)


    const getAllUsers = async () => {
        setIsLoading(true)
        axios.get('https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users', { params: { store_id: "ea7aa965-bef1-4c38-b2b3-e62c865b5a7a", limit: 50 } }
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
    return (
        <div>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter Password</ModalHeader>
                    <Select placeholder='Select User' p="10px">
                        {users.map((user: User) => (
                            <option key={user.id} value={user.id}>{user.name}</option>

                        ))}
                    </Select>

                    <InputGroup size='md' p="10px">
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem' p="10px">
                            <Button h='1.75rem' size='sm' mt="20px" onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='green'>Validate</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Login



