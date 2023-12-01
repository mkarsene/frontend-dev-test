import { EditIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, Divider, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductDetails from './ProductDetails'
import { TypesenseItem } from '../type'
import { Link } from 'react-router-dom'

interface Props {
    hit: TypesenseItem,
    onOpen: () => void
}




const ListProducts = ({ hit }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
        <>

            <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth="150px">
                <Box bg="white" >
                    <Card maxW='200px'>
                        <Flex justifyContent="end">
                            <Button onClick={() => { onOpen() }} w="50px" borderRadius="80px" bg="black" color="white">
                                <EditIcon />
                            </Button>
                        </Flex>
                        <CardBody>
                            <Image
                                src={`https://dghhemym84nng.cloudfront.net/bofrak-uploads/${hit.sku}.png`}
                                alt={hit.name}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading isTruncated fontWeight='bold' fontSize='small'>{hit.name}</Heading>
                                <Divider />
                                <Heading fontSize='small'>Stock{hit.track_stock}</Heading>
                                <Heading fontSize='small'>cost: K {hit.cost}</Heading>
                                <Heading fontSize='small'>price: K{hit.price}</Heading>
                                {/* <Text fontSize='small'>stock : {hit.stock}</Text> */}
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
                        {/* <Lorem count={2} /> */}
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