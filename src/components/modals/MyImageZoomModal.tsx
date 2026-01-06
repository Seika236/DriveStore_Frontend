import { CloseButton, Dialog, Image, Portal } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
  image: string;
  onOpenChange: () => void;
};

export const MyImageZoomModal = ({ image, onOpenChange }: Props) => {
  const [isZoom, setIsZoom] = useState<boolean>(false);

  useEffect(() => {
    if (!image) setIsZoom(false);
  }, [image]);

  return (
    <Dialog.Root
      onOpenChange={onOpenChange}
      open={!!image}
      placement={"center"}
      motionPreset="slide-in-bottom"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            cursor={isZoom ? "zoom-out" : "zoom-in"}
            scale={isZoom && "1.5"}
          >
            <Image
              src={image}
              onClick={() => {
                setIsZoom((prevState) => !prevState);
              }}
            />
            <Dialog.CloseTrigger asChild>
              <CloseButton onClick={onOpenChange} size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
