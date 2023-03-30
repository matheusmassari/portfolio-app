import { Grid } from "@chakra-ui/react";
import data from "../../public/data";
import GridItemComponent from "./GridItem";

const MainGrid = () => {
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={4} p={4} width={"100%"}>
            {data.map(({ id, name, src }) => {
                console.log(id, name, src);
                return (
                    <GridItemComponent
                        key={id}                        
                        title={name}
                        image={src}
                    />
                );
            })}
        </Grid>
    );
};

export default MainGrid;
