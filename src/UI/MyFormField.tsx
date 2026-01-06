import { Field, Input, InputProps, Text } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  type: string;
  isVisibleLabel?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  errorText?: string;
  isDisabled?: boolean;
  register: UseFormRegisterReturn;
  styles?: InputProps;
};

export function MyFormField({
  errorText,
  label,
  isRequired,
  placeholder,
  isVisibleLabel = false,
  type,
  isDisabled,
  register,
  styles,
}: Props) {
  return (
    <Field.Root invalid={!!errorText}>
      {isVisibleLabel && (
        <Field.Label>
          {label} {isRequired && <Text color={"red"}>*</Text>}
        </Field.Label>
      )}
      <Input
        {...register}
        {...styles}
        type={type}
        disabled={isDisabled}
        placeholder={placeholder}
      />
      <Field.ErrorText>{errorText}</Field.ErrorText>
    </Field.Root>
  );
}
