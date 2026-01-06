import {
  Button,
  CloseButton,
  Drawer,
  DrawerBodyProps,
  Portal,
} from "@chakra-ui/react";
import { CSSProperties, ReactElement } from "react";

type Props = {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  open: boolean;
  onCloseDrawer: () => void;
  title: string;
  children: ReactElement;
  isCenteredContent?: boolean;
  bodyStyle?: CSSProperties;
  isVisibleFooter?: boolean;
};

export function MyDrawer({
  size,
  open,
  onCloseDrawer,
  title,
  children,
  isCenteredContent,
  bodyStyle,
  isVisibleFooter = true,
}: Props) {
  const centeredStyle: DrawerBodyProps = isCenteredContent
    ? {}
    : {
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        alignContent: "center",
      };

  return (
    <Drawer.Root size={size} open={open} onOpenChange={onCloseDrawer}>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>{title}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body {...centeredStyle} style={bodyStyle}>
              {children}
            </Drawer.Body>
            {isVisibleFooter && (
              <Drawer.Footer>
                <Button variant="outline" onClick={onCloseDrawer}>
                  Cancel
                </Button>
              </Drawer.Footer>
            )}

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
