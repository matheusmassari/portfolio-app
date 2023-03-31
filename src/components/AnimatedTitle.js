import { Heading } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedTitle = ({ show }) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Heading
                        as="h1"
                        fontSize={["2xl", "3xl"]}
                        fontFamily={"Ricordi-r"}                        
                        textAlign="center"
                        color={"yellow.800"}
                    >
                        Isadora Buonocore
                    </Heading>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AnimatedTitle;
