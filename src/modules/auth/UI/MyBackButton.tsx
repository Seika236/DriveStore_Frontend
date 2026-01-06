"use client";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type Props = {
  isLoading: boolean;
};

export function MyBackButton({ isLoading }: Props) {
  const router = useRouter();
  const onBackClick = () => {
    router.push("/");
  };

  return (
    <Button
      onClick={onBackClick}
      w={{ md: "120px" }}
      variant={"outline"}
      disabled={isLoading}
    >
      На главную
    </Button>
  );
}
