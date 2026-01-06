import { Field, HStack, Text, Textarea, TextareaProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  isVisibleLabel?: boolean;
  isRequired?: boolean;
  isAutosize?: boolean;
  placeholder?: string;
  errorText?: string;
  register: UseFormRegisterReturn;
  styles?: TextareaProps;
};

export function MyTextArea({
  errorText,
  label,
  isRequired,
  isAutosize = false,
  placeholder,
  isVisibleLabel = false,
  register,
  styles,
}: Props) {
  return (
    <HStack gap="10" width="full">
      <Field.Root invalid={!!errorText}>
        {isVisibleLabel && (
          <Field.Label>
            {label} {isRequired && <Text color={"red"}>*</Text>}
          </Field.Label>
        )}

        <Textarea
          {...styles}
          autoresize={isAutosize}
          {...register}
          placeholder={placeholder}
        />
        <Field.ErrorText>{errorText}</Field.ErrorText>
      </Field.Root>
    </HStack>
  );
}
