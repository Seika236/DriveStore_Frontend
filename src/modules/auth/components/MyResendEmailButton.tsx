import { Button } from "@chakra-ui/react";
import { authStore } from "@/store/authStore";

export function MyResendEmailButton() {
  const { setVisibleResendEmailDialog } = authStore();

  return (
    <Button
      type={"button"}
      variant={"plain"}
      _hover={{ colorPalette: "orange" }}
      onClick={() => setVisibleResendEmailDialog(true)}
    >
      resend email
    </Button>
  );
}
