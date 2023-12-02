import { EditIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, Divider, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { TypesenseItem } from '../type'
import React from 'react'

interface Props {
    hit: TypesenseItem,
}

const ListProducts = ({ hit }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
        <>
            <SimpleGrid p="10px" columns={4} gap={5}>
                <Box bg="white" >
                    <Card maxW='200px'>
                        <Flex justifyContent="end">
                            <Button onClick={() => { onOpen() }} w="50px" borderRadius="80px" bg="black" color="white">
                                <EditIcon />
                            </Button>
                        </Flex>
                        <CardBody>
                            <Image
                                src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${hit.sku}.png`}
                                alt={hit.name}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading isTruncated fontWeight='bold' fontSize='small'>{hit.name}</Heading>
                                <Divider />
                                <Heading fontSize='small'>Stock{hit.track_stock}</Heading>
                                <Heading fontSize='small'>cost: K {hit.cost}</Heading>
                                <Heading fontSize='small'>price: K{hit.price}</Heading>
                                <Text fontSize='small'>available: {hit.is_available_for_sale}</Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
            </SimpleGrid>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ListProducts