import { Box, Menu, Portal } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useQuery } from "@tanstack/react-query";
import { transformTypeResponse } from "@/modules/burgerMenu/lib/transformTypeResponse";
import { MyBurgerFirstMenuItem } from "@/modules/burgerMenu/components/MyBurgerFirstMenuItem";
import { MyBurgerSecondMenuItem } from "@/modules/burgerMenu/components/MyBurgerSecondMenuItem";
import GlobalTypesService from "@/services/globalTypesService";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  children: ReactElement;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function MyDropBurgerMenu({
  isOpen,
  onOpenChange,
  onMouseLeave,
  onMouseEnter,
  children,
}: Props) {
  const { data } = useQuery({
    queryKey: ["fetch:get/all/types"],
    queryFn: GlobalTypesService.getAllTypes,
    select: (data) => data.data.reduce(transformTypeResponse, {}),
  });

  return (
    <Menu.Root
      positioning={{ offset: { mainAxis: 0 } }}
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <Menu.Trigger asChild>
        <Box>{children}</Box>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner position={"absolute"} w={"100vw"}>
          <Menu.Content
            marginX={"auto"}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            display={"grid"}
            maxW={"1200px"}
            gridTemplateColumns={"repeat(8, 1fr)"}
          >
            <MyBurgerFirstMenuItem />
            <MyBurgerSecondMenuItem data={data} />
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
