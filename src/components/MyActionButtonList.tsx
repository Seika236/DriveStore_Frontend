import { Box, Button } from "@chakra-ui/react";
import { ActionButtonType } from "../types/ActionButtonType";

type Props = {
  buttons: ActionButtonType[];
};

export function MyActionButtonList({ buttons }: Props) {
  return (
    <Box as={"ul"} display={"grid"} rowGap={3}>
      {buttons.map((button) => {
        return (
          <Box key={button.name} as={"li"}>
            <Button variant={"outline"} w={"300px"} onClick={button.onClick}>
              {button.name}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
}
