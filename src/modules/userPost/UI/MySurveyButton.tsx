import { Button } from "@chakra-ui/react";
import { SurveyIcon } from "@/assets/icons/survey-icon";

type Props = {
  onClick: () => void;
};

export function MySurveyButton({ onClick }: Props) {
  return (
    <Button variant={"outline"} type={"button"} onClick={onClick} size={"sm"}>
      <SurveyIcon /> Опрос
    </Button>
  );
}
