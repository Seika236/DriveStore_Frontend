import { Button, Flex } from "@chakra-ui/react";
import { MySubmitButton } from "@/ui/MySubmitButton";

type Props = {
  isLoading: boolean;
  onOpenChange: () => void;
};

export function MyModalFooterButtonsContainer({
  isLoading,
  onOpenChange,
}: Props) {
  return (
    <Flex marginTop={"30px"} columnGap={2} justifyContent={"end"}>
      <MySubmitButton isLoading={isLoading} />
      <Button onClick={onOpenChange} variant="outline">
        Cancel
      </Button>
    </Flex>
  );
}
