"use client";

import { Box, Image } from "@chakra-ui/react";
import { getStaticImageFromServer } from "../../../lib/getStaticImageFromServer";
import { useState } from "react";
import { MyImageZoomModal } from "@/components/modals/MyImageZoomModal";

type Props = {
  images: string[];
};

export function MyProfileImageContainer({ images }: Props) {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [viewImage, setViewImage] = useState<number>(0);

  const onOpenChange = () => {
    setActiveImage(null);
  };

  const onSetActiveImage = (index: number) => {
    setActiveImage(index);
  };

  const onSetViewImage = (index: number) => {
    setViewImage(index);
  };

  return (
    <Box
      as={"ul"}
      w={"full"}
      display={"flex"}
      columnGap={2}
      flexDirection={"row"}
    >
      {images.map((image, index) => {
        return (
          <Box
            as={"li"}
            cursor={index === activeImage ? "zoom-in" : "pointer"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            key={index}
            h={{ base: "200px", md: "300px" }}
            w={"full"}
            blur={"2xl"}
            bg={{ base: "gray.100", _dark: "black" }}
            rounded={"xl"}
            border={"3px solid"}
            borderColor={{ base: "gray.200", _dark: "white" }}
            overflow="hidden"
          >
            {!!image ? (
              <Image
                transitionDuration={"slow"}
                onMouseEnter={() => onSetViewImage(index)}
                onClick={() => onSetActiveImage(index)}
                opacity={index !== viewImage && "10%"}
                saturate={"180%"}
                w={"full"}
                h={"full"}
                objectFit="cover"
                src={getStaticImageFromServer(image)}
              />
            ) : (
              <Box>Пусто</Box>
            )}
          </Box>
        );
      })}
      <MyImageZoomModal
        image={
          images?.[activeImage] && getStaticImageFromServer(images[activeImage])
        }
        onOpenChange={onOpenChange}
      />
    </Box>
  );
}
