import { Flex, Container } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import MainGrid from "../components/MainGrid";
import { motion } from "framer-motion";

export default function Main() {
    return (
        <Container maxW={{ base: "100%", md: "1200px", xl: "1600px" }}>
            <Flex>
                <Sidebar />
                <motion.div
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ y: "100vh" }}
                    flex="1"
                >
                    <MainGrid />
                </motion.div>
            </Flex>
        </Container>
    );
}
