import { SuggestionType } from "@/modules/searchSuggestions/types/suggestion";
import { ReactElement } from "react";
import { Box, Flex, VStack, Text } from "@chakra-ui/react";

type Props = {
  suggestions: SuggestionType[];
  children?: ReactElement;
};

export function MySuggestionsList({ suggestions, children }: Props) {
  return (
    <Box position={"absolute"} maxHeight={"100vh"}>
      <Box as={"ul"}>
        <VStack>
          {suggestions.map((suggestions, index) => {
            return (
              <Box as={"li"} key={index}>
                <Flex>
                  <Box>{children}</Box>
                  <VStack>
                    <Text>{suggestions.title}</Text>
                    {suggestions.description && suggestions.description}
                  </VStack>
                </Flex>
              </Box>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
}
