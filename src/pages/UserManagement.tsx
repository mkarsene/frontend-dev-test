import { Badge, Box, Card, Flex, Text } from '@chakra-ui/react';
import useFetchUsers from '../hooks/UserFetchUsers';

const UserManagement = () => {
  const { data, isLoading, error } = useFetchUsers({
    store_id: 'ea7aa965-bef1-4c38-b2b3-e62c865b5a7a',
    limit: 50,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card bg="#f0f5fa" pt={10}>
      <Text fontSize="3xl" textAlign="center" fontWeight={700}>
        Manage Users
      </Text>
      {data?.employees.map((employee) => (
        <Box
          h={200}
          my={4}
          mx={10}
          boxShadow="base"
          p="6"
          rounded="md"
          bg="white"
          key={employee.id}
        >
          <Flex flexDirection="column">
            <Text fontWeight={700} pb={12}>
              {employee.name.toUpperCase()}
            </Text>
            <Flex justifyContent="space-between" alignItems="start">
              <Flex flexDirection="column">
                <Flex flexDirection="column">
                  <Text fontWeight={600}>ROLES</Text>
                  <Text>{employee.roles}</Text>
                </Flex>
              </Flex>
              <Badge variant="subtle" colorScheme="green">
                ACTIVE
              </Badge>
            </Flex>
          </Flex>
        </Box>
      ))}
    </Card>
  );
};

export default UserManagement;
