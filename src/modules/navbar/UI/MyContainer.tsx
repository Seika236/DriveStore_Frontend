import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

type Props = {
  children: ReactElement[] | ReactElement;
};

export function MyContainer({ children }: Props) {
  return (
    <Box maxWidth={1200} px={15} mx={"auto"}>
      {children}
    </Box>
  );
}
