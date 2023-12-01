import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
} from '@chakra-ui/react';
import { SlNote } from 'react-icons/sl';

type Props = {
  image: string;
  productName: string;
};

const ProductDetails = ({ image, productName }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        float="right"
        rounded="50%"
        padding="2px"
        bg="black"
        color="white"
      >
        <SlNote />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Image Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={image}
              alt={productName}
              boxSize="150px"
              objectFit="cover"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='teal' variant='solid' opacity="0.4" disabled cursor="not-allowed">Update Image In Backend</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductDetails;
