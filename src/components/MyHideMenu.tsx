import { Button, Menu, Portal } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  buttonText: string | ReactNode;
  children: ReactNode;
  flexibleKey: "sm" | "md" | "lg";
};

export function MyHideMenu({ buttonText, children, flexibleKey }: Props) {
  const displayObj = {
    sm: { sm: "none" },
    md: { md: "none" },
    lg: { lg: "none" },
  }[flexibleKey];

  return (
    <Menu.Root positioning={{ placement: "left-end" }}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" display={displayObj}>
          {buttonText}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>{children}</Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
