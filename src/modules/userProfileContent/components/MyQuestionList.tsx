import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { ISurvey } from "../../../types/models/ISurvey";
import { MyQuestionItem } from "@/modules/userProfileContent/UI/MyQuestionItem";
import { UseQuestionList } from "@/modules/userProfileContent/hooks/useQuestionList";
import { UseAuthErrorModal } from "@/hooks/useAuthErrorModal";

type Props = {
  survey: ISurvey;
  surveyRefetch?: () => void;
};

export function MyQuestionList({ survey, surveyRefetch }: Props) {
  const { onQuestionClick, isLoading, data } = UseQuestionList({
    survey,
    surveyRefetch,
  });

  const { checkAuthHandler } = UseAuthErrorModal({ callback: onQuestionClick });

  return (
    <Grid
      w={"full"}
      p={5}
      rounded={"xl"}
      rowGap={5}
      transitionDuration={"slowest"}
      _hover={{ bg: "gray.900", outline: "1px solid white" }}
    >
      <Heading textAlign={"center"}>{survey.title}</Heading>
      <Box
        w={"full"}
        as={"ul"}
        display={"grid"}
        rowGap={2}
        maxW={"4xl"}
        mx={"auto"}
      >
        {survey.questions.map((question, index) => (
          <Box as={"li"} key={index}>
            <MyQuestionItem
              isChoice={data?.questionName === question.name}
              isDisabled={!!data || isLoading}
              onQuestionClick={checkAuthHandler}
              question={question}
            />
          </Box>
        ))}
      </Box>
      <Text textAlign={"center"} color={"gray.400"}>
        {survey.total} проголосовали
      </Text>
    </Grid>
  );
}
