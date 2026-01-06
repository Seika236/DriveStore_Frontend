import { Box, Flex } from "@chakra-ui/react";
import { MySubmitButton } from "@/ui/MySubmitButton";
import { MyBackButton } from "@/modules/auth/UI/MyBackButton";
import { MyResendEmailButton } from "@/modules/auth/components/MyResendEmailButton";

type Props = {
  isLoading: boolean;
};

export function MyFormActionPanel({ isLoading }: Props) {
  return (
    <Flex justifyContent={"end"} columnGap={3}>
      <Box marginRight={"auto"}>
        <MyResendEmailButton />
      </Box>
      <MyBackButton isLoading={isLoading} />
      <MySubmitButton isLoading={isLoading} />
    </Flex>
  );
}
