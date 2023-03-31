import { Box, Container, Text, VStack } from "@chakra-ui/react";
import ImageGallery from "./ImageGallery";

const Project = ({ description, gallery }) => {
    return (
        <Box py="8">
            <Container
                maxW={{ base: "100%", xl: "1200px" }}
                px={{ base: "4", xl: "0" }}
            >
                <Text
                    mb="4"
                    fontSize={{ base: "xl", xl: "2xl" }}
                    fontWeight="bold"
                >
                    {description}
                </Text>
                <ImageGallery gallery={gallery} />
            </Container>
        </Box>
    );
};

export default Project;
