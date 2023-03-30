import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
    styles: {
        global: {
            html: {
                bgColor: "#E8E6E3",
            },
            body: {
                bgColor: "#E8E6E3",
            },
        },
    },
    fonts: {
        heading: `Montserrat`,
        body: `Montserrat-l`,
    },
});

export default theme;
