import { Grid, GridItem, Menu } from "@chakra-ui/react";
import { MyCategoryTypeList } from "@/modules/burgerMenu/components/MyCategoryTypeList";

type Props = {
  data: Object;
};

export function MyBurgerSecondMenuItem({ data }: Props) {
  return (
    <Menu.Item value="new-file-a" h={"lg"} gridColumn={"span 6"} p={3}>
      <Grid
        alignItems={"start"}
        justifyItems={"center"}
        gap={2}
        gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gridTemplateRows={{ base: "repeat(6, 1fr)", lg: "repeat(3, 1fr)" }}
        w={"full"}
        h={"full"}
      >
        {!!data ? (
          Object.entries(data).map((gridItem, index) => {
            return (
              <GridItem key={index} rowSpan={2} w={"full"} textAlign={"center"}>
                <MyCategoryTypeList categoryTypeList={gridItem} />
              </GridItem>
            );
          })
        ) : (
          <div></div>
        )}
      </Grid>
    </Menu.Item>
  );
}
