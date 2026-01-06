import { ReactElement } from "react";
import { Grid, Heading, Text } from "@chakra-ui/react";

type Props = {
  children: ReactElement[];
  title: string;
};

export function MyFormFieldset({ children, title }: Props) {
  return (
    <Grid
      rowGap={3}
      paddingY={4}
      paddingX={6}
      _hover={{
        outlineColor: "gray.500",
        outlineWidth: 2,
        outlineStyle: "solid",
      }}
      bg={"gray.950/80"}
      rounded={10}
      minW={300}
      w={{ base: 450, lg: 500 }}
    >
      <Heading>{title}</Heading>
      <Text>Fill in the form below to create an account</Text>
      {children}
    </Grid>
  );
}
