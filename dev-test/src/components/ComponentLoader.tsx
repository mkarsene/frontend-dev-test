import { Spinner } from '@chakra-ui/react'

const ComponentLoader = () => {
    return (
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            position="absolute"
            top="50%"
            left="50%"
            mt="300px"
        />
    )
}

export default ComponentLoader
