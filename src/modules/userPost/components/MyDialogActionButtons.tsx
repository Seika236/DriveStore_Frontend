"use client";

import { Button, FileUpload, Flex } from "@chakra-ui/react";
import { LuFileImage } from "react-icons/lu";
import { MyFileUploadList } from "@/components/MyFileUploadList";
import { MySurveyButton } from "@/modules/userPost/UI/MySurveyButton";

type PropsUploadButton = {
  title: string;
  maxFiles?: number;
  onSurveyButtonClick: () => void;
  isVisibleSurveyButton: boolean;
  setFiles: (files: File[]) => void;
};

export const MyCreatePostActionButtons = ({
  title,
  maxFiles = 5,
  onSurveyButtonClick,
  isVisibleSurveyButton,
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
        {isVisibleSurveyButton && (
          <MySurveyButton onClick={onSurveyButtonClick} />
        )}
      </Flex>
    </FileUpload.Root>
  );
};
