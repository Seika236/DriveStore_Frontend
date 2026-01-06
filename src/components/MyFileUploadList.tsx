import { useFileUploadContext } from "@ark-ui/react";
import { FileUpload, Flex, Float } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import { useEffect } from "react";

type Props = {
  setFiles: (files: File[]) => void;
};

export function MyFileUploadList({ setFiles }: Props) {
  const fileUpload = useFileUploadContext();
  const files = fileUpload.acceptedFiles;
  const filesNames = files?.reduce((names, file) => {
    return (names += file.name);
  }, "");
  useEffect(() => {
    setFiles(files);
  }, [filesNames]);

  if (files.length === 0) return null;
  return (
    <FileUpload.ItemGroup>
      <Flex
        flexDirection={"row"}
        rowGap={3}
        columnGap={{ base: "10px", lg: "20px" }}
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        {files.map((file) => (
          <FileUpload.Item
            w="auto"
            boxSize="20"
            p="2"
            file={file}
            key={file.name}
          >
            <FileUpload.ItemPreviewImage />
            <Float placement="top-end">
              <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
                <LuX />
              </FileUpload.ItemDeleteTrigger>
            </Float>
          </FileUpload.Item>
        ))}
      </Flex>
    </FileUpload.ItemGroup>
  );
}
