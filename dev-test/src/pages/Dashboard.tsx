import { Box, Card, CardBody, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    hit: any
}

const Dashboard = ({ hit }: Props) => {
    return (
        <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth="150px">
            <Box bg="white" >
                <Card maxW='200px'>
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
                            <Text fontSize='small'>stock : {hit.stock}</Text>
                            <Text fontSize='small'>available: {hit.is_available_for_sale}</Text>
                        </Stack>
                    </CardBody>

                </Card>
            </Box>

        </SimpleGrid>
    )
}

export default Dashboard