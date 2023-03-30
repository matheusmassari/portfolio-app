import { useState, useEffect } from "react";
import { Box, Center } from "@chakra-ui/react";
import AnimatedTitle from "../components/AnimatedTitle";
import { useRouter } from "next/router";

export default function Home() {
    const [showTitle, setShowTitle] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTitle(false);            
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push("/main");
        }, 3500);
        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <Box height="100vh">
            <Center height="100%">
                <AnimatedTitle show={showTitle} />
            </Center>
        </Box>
    );
}
