import { Flex, Spinner, Stack } from "@chakra-ui/react";
export function MySpinner() {
  return (
    <Flex
      gap="2"
      top={0}
      left={0}
      position={"absolute"}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      width={"100%"}
      bg={{ base: "white", _dark: "black" }}
      height={"100%"}
      align="flex-start"
    >
      <Spinner size="xl" color="orange.600" colorPalette={"orange"} />
    </Flex>
  );
}
