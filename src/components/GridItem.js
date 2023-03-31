import { GridItem, Center, Box, Image, Heading, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

const GridItemComponent = ({ title, image, id }) => {
    return (
        <GridItem h="50vh">
            <Center h="100%">
                <VStack>
                    <NextLink href={`/projetos/${id}`}>
                        <Box                            
                            textAlign="center"
                            overflow={"hidden"}
                            height="30vh"
                            width="20w"
                            spacing={6}
                        >
                            <Image
                                src={image}
                                alt="Placeholder Image"
                                height="30vh"
                                width="20w"
                                objectFit="cover"
                                transition="transform 0.6s"
                                _hover={{ transform: "scale(1.05)" }}
                                cursor="pointer"
                            />
                        </Box>
                    </NextLink>
                    <Heading fontSize={"1rem"} fontFamily={'Ricordi-l'} color={"orange.800"}>
                        {title}
                    </Heading>
                </VStack>
            </Center>
        </GridItem>
    );
};

export default GridItemComponent;
