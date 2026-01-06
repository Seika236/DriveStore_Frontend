import { Button } from "@chakra-ui/react";

type Props = {
  isLoading: boolean;
  onSubmit?: () => void;
};

export function MySubmitButton({ isLoading, onSubmit }: Props) {
  return (
    <Button
      onSubmit={onSubmit}
      type={"submit"}
      w={{ md: 120, lg: 150 }}
      variant={"outline"}
      colorPalette={"orange"}
      disabled={isLoading}
    >
      submit
    </Button>
  );
}
