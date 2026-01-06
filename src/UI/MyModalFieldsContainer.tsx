import { ReactElement } from "react";
import { Grid, GridProps, VStack } from "@chakra-ui/react";

type Props = {
  children: ReactElement[] | ReactElement;
  style?: GridProps;
};

export function MyModalFieldsContainer({ children, style }: Props) {
  return (
    <Grid {...style} gap={3}>
      {children}
    </Grid>
  );
}
