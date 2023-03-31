import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const Sidebar = () => {
    return (
        <Box h="100vh" p={4} mt={"3rem"} w={"25%"}>
            <Heading fontSize={"1.5rem"} fontFamily={'Ricordi-r'}>Isadora Buonocore</Heading>
            <VStack alignItems={'left'} mt={6} >
                <Text>projetos</Text>
                <Text>sobre</Text>
                <Text>contatos</Text>
                <Text as='i' mt={6} >portfolio book</Text>
            </VStack>
        </Box>
    );
};


export default Sidebar;