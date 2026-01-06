import { Grid, Skeleton } from "@chakra-ui/react";
import { ReactElement } from "react";
import { createHTMLErrorHandler } from "next/dist/server/app-render/create-error-handler";

type Props = {
  children: ReactElement[];
  isLoading: boolean;
};

export function MyProfileContentContainer({ children, isLoading }: Props) {
  return (
    <Skeleton loading={isLoading}>
      <Grid
        px={5}
        py={3}
        rowGap={3}
        rounded={"3xl"}
        bg={{ base: "white", _dark: "gray.900" }}
        borderWidth="1px"
        borderColor={{ base: "gray.100", _dark: "transparent" }}
        boxShadow={{ base: "sm", _dark: "none" }}
        _hover={{
          bg: { base: "gray.50", _dark: "gray.800" },
          borderColor: { base: "gray.200", _dark: "transparent" },
        }}
      >
        {children}
      </Grid>
    </Skeleton>
  );
}
