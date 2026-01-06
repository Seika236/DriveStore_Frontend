import { Button } from "@chakra-ui/react";
import { IQestion } from "../../../types/models/IQestion";

type Props = {
  question: IQestion;
  isChoice: boolean;
  onQuestionClick: (questionId: number, questionName: string) => void;
  isDisabled?: boolean;
};

export function MyQuestionItem({
  question,
  onQuestionClick,
  isDisabled,
  isChoice,
}: Props) {
  return (
    <Button
      disabled={isDisabled}
      variant={"solid"}
      onClick={() => onQuestionClick(question.surveyId, question.name)}
      cursor={"pointer"}
      w={"full"}
      p={3}
      rounded={"xl"}
      _disabled={{
        bg: isChoice && "transparent",
        border: isChoice && "1px solid white",
        color: isChoice && "white",
        opacity: isChoice && "1",
      }}
      bg={"gray.600"}
      color={"white"}
      _hover={{ bg: "gray.800", translate: "10px" }}
      key={question.name}
      transitionDuration={"slowest"}
    >
      {question.name}
    </Button>
  );
}
