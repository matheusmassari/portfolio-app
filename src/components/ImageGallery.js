import { Box, Center, VStack, Image } from "@chakra-ui/react";

const ImageGallery = ({ gallery }) => {
    
    return (
        <Box h="100%" w={"80vw"}>            
            <VStack spacing={4} align="stretch">
                {gallery && gallery.map((image, index) => {                    
                    return (
                        <Center key={index}>
                            <Box shadow="md">
                                <Image src={image} alt={`Image ${index + 1}`} />
                            </Box>
                        </Center>
                    );
                })}
            </VStack>
        </Box>
    );
};

export default ImageGallery;
