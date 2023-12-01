import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const ProductDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  return (
    <div>
        <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
        <Box  ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
        Some other content that'll receive focus on close.
      </Box>
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
    </div>
  )
}

export default ProductDetails
