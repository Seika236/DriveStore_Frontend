"use client";

import {
  Text,
  Box,
  Grid,
  Heading,
  FileUpload,
  Button,
  Image,
} from "@chakra-ui/react";
import { ViewIcon } from "@/assets/icons/view-icon";
import { useFileUploadContext } from "@ark-ui/react";
import { useEffect, useMemo } from "react";

type Props = {
  setProfileImg: () => void;
  resetFile: () => void;
  setFiles: (files: File[]) => void;
  previewImage: string | null;
  isPreviewImage: boolean;
};

export function UpdateProfileImageComponent({
  setFiles,
  previewImage,
  setProfileImg,
  resetFile,
}: Props) {
  const fileUpload = useFileUploadContext();
  const files = fileUpload.acceptedFiles;
  const fileName = files[0]?.name;
  useEffect(() => {
    setFiles(files);
  }, [fileName]);

  const onSaveClick = () => {
    setProfileImg();
    resetFile();
    files.pop();
  };

  const onResetClick = () => {
    resetFile();
    files.pop();
  };

  return (
    <Box
      cursor={"pointer"}
      ml={{ base: "auto", md: "0" }}
      mb={{ base: 2, md: 0 }}
    >
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        {!!previewImage ? (
          <Image
            src={previewImage}
            aspectRatio={1.24 / 1}
            width={{ base: "350px", md: "282px" }}
            objectFit={"cover"}
          />
        ) : (
          <Grid
            display={"grid"}
            cursor={"pointer"}
            padding={3}
            rounded={6}
            textAlign={"center"}
            justifyItems={"center"}
            bgColor={"gray.950"}
            _hover={{ bgColor: "gray.800" }}
          >
            <ViewIcon size={100} />
            <Heading>Добавьте ваше фото</Heading>
            <Text>
              Это повысит доверие покупателей и сделает ваши объявления
              привлекательнее.
            </Text>
          </Grid>
        )}
      </FileUpload.Trigger>
      <FileUpload.List />
      {!!fileName && (
        <Grid>
          <Button
            w={"full"}
            variant={"outline"}
            colorPalette={"orange"}
            onClick={onSaveClick}
          >
            сохранить изображение
          </Button>
          <Button
            w={"full"}
            variant={"ghost"}
            color={"red.600"}
            onClick={onResetClick}
          >
            сбросить изображение
          </Button>
        </Grid>
      )}
    </Box>
  );
}
