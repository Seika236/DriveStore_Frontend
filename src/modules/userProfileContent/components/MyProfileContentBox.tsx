import { Text, Grid, Heading } from "@chakra-ui/react";

type Props = {
  title: string;
  description: string;
};

export function MyProfileContentBox({ title, description }: Props) {
  return (
    <Grid rowGap={3}>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </Grid>
  );
}
