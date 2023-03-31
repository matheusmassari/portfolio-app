import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
    styles: {
        global: {
            "::-webkit-scrollbar": {
                width: "0.5em",
                height: "0.5em",
            },
            "::-webkit-scrollbar-thumb": {
                background: "#f2dcbc",
                borderRadius: "1em",
            },
            "::-webkit-scrollbar-track": {
                background: "transparent",
            },
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
