import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import '../../fonts/global.css'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme} >
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
