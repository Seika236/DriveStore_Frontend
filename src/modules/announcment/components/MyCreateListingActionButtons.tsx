"use client";

import { Button, FileUpload, Flex } from "@chakra-ui/react";
import { LuFileImage } from "react-icons/lu";
import { MyFileUploadList } from "@/components/MyFileUploadList";
import { MySurveyButton } from "@/modules/userPost/UI/MySurveyButton";
import { PropertyIcon } from "@/assets/icons/property-icon";

type PropsUploadButton = {
  title: string;
  maxFiles?: number;
  onPropertyButtonClick: () => void;
  isVisiblePropertyButton: boolean;
  setFiles: (files: File[]) => void;
};

export const MyCreateListingActionButtons = ({
  title,
  maxFiles = 5,
  onPropertyButtonClick,
  isVisiblePropertyButton,
  setFiles,
}: PropsUploadButton) => {
  return (
    <FileUpload.Root maxFiles={maxFiles} accept="image/*">
      <MyFileUploadList setFiles={setFiles} />
      <FileUpload.HiddenInput />
      <Flex columnGap={"10px"}>
        <FileUpload.Trigger asChild>
          <Button variant="outline" size="sm">
            <LuFileImage /> {title}
          </Button>
        </FileUpload.Trigger>
        {isVisiblePropertyButton && (
          <Button
            variant={"outline"}
            size={"sm"}
            onClick={onPropertyButtonClick}
          >
            <PropertyIcon /> Описание
          </Button>
        )}
      </Flex>
    </FileUpload.Root>
  );
};
