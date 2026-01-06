import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { ReactElement } from "react";

type Props = {
  title: string;
  children: ReactElement;
  isVisible: boolean;
  onOpenChange: () => void;
  size: "xs" | "sm" | "md" | "lg";
  actionButton?: ReactElement;
  isEnabledFooter?: boolean;
};

export function MyDialog({
  isVisible,
  title,
  onOpenChange,
  size,
  children,
  actionButton,
  isEnabledFooter,
}: Props) {
  return (
    <Dialog.Root size={size} onOpenChange={onOpenChange} open={isVisible}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{children}</Dialog.Body>
            {!isEnabledFooter && (
              <Dialog.Footer>
                {actionButton}
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
            )}
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
