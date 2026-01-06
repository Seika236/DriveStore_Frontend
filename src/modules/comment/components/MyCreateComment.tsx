import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { MyAvatar } from "@/ui/MyAvatar";
import { getPreviewImage } from "../../../lib/getPreviewImage";
import { authStore } from "@/store/authStore";
import { MyTextArea } from "@/ui/MyTextArea";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  isDisabled: boolean;
  register: UseFormRegisterReturn;
  errorText: string;
};

export function MyCreateComment({ isDisabled, register, errorText }: Props) {
  const { user, isAuth } = authStore();

  return (
    <Grid
      templateColumns="auto 1fr"
      gap={3}
      alignItems="flex-start"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      transitionDuration={"slow"}
      _hover={{ borderColor: "white" }}
    >
      <GridItem>
        <MyAvatar imageUrl={getPreviewImage(null, user?.profile?.profileImg)} />
      </GridItem>

      <GridItem>
        <MyTextArea
          errorText={errorText}
          isVisibleLabel={false}
          label={"write comment"}
          register={register}
          isAutosize={true}
          placeholder={"ваш комментарий"}
        />

        <Flex justifyContent="flex-end" mt={2}>
          <Button
            type={"submit"}
            disabled={isDisabled || !isAuth}
            colorPalette={"orange"}
            size="sm"
          >
            Отправить
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
}
