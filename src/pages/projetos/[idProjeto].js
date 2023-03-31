import { Flex, Container } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import Project from "../../components/Project";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import data from "../../../public/data";

export default function DynamicPage() {
    const router = useRouter();
    const { idProjeto } = router.query;
    const dataFiltered = data.find((item) => {
        return item.id === +idProjeto;
    });
    const gallery = dataFiltered && dataFiltered.gallery;
    const description = dataFiltered && dataFiltered.description;
    

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
                    <Project gallery={gallery} description={description} />
                </motion.div>
            </Flex>
        </Container>
    );
}
