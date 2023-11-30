import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
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
                            <Divider />
                            <Heading size='5px'>{hit.name}</Heading>
                            <Heading size='sx'>cost{hit.price}</Heading>
                            <Text>profit_margin : {hit.profit_margin}</Text>
                            <Text>stock : {hit.stock}</Text>
                        </Stack>
                    </CardBody>

                </Card>
            </Box>

        </SimpleGrid>
    )
}

export default Dashboard