import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useState } from "react";

type Props = {
  comment: string;
};

export const MySellerComment = ({ comment }: Props) => {
  const titleColor = useColorModeValue("black", "white");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const buttonBg = useColorModeValue("gray.100", "whiteAlpha.200");
  const buttonHoverBg = useColorModeValue("gray.200", "whiteAlpha.300");
  const [isFullComment, setIsFullComment] = useState(false);

  const onReadFullMassage = () => {
    setIsFullComment(true);
  };

  const slicedMessage = comment.slice(0, 2000);
  return (
    <Box
      w={"full"}
      p={4}
      bg={{ base: "white", _dark: "gray.800" }}
      rounded={"lg"}
      borderWidth={"1px"}
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      transitionDuration={"slower"}
      _hover={{ borderColor: "orange.500" }}
      mb={4}
      boxShadow={{ base: "sm", _dark: "none" }}
    >
      <VStack align="start">
        <Heading as="h2" size="lg" color={titleColor} fontWeight="bold">
          Комментарий продавца
        </Heading>

        {comment.length === 0 ? (
          <Text>Продавец не оставил комментарий</Text>
        ) : (
          <Text color={textColor} fontSize="md" whiteSpace={"pre-wrap"}>
            {isFullComment ? comment : slicedMessage}
          </Text>
        )}

        {comment.length > slicedMessage.length && !isFullComment && (
          <Button
            onClick={onReadFullMassage}
            w="full"
            maxW="300px"
            py={6}
            bg={buttonBg}
            color={titleColor}
            _hover={{ bg: buttonHoverBg }}
            borderRadius="xl"
            fontSize="md"
            fontWeight="medium"
          >
            Читать дальше
          </Button>
        )}
      </VStack>
    </Box>
  );
};
