import { Field, Text, Input, InputProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";
import { PlaceholderStyle } from "next/dist/shared/lib/get-img-props";
import { ChangeEvent } from "react";

type Props = {
  label: string;
  type: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isVisibleLabel?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  errorText?: string;
  styles?: InputProps;
};

export function MyInput({
  errorText,
  label,
  isRequired,
  placeholder,
  onChange,
  value,
  isVisibleLabel = false,
  type,
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
        value={value}
        onChange={onChange}
        {...styles}
        type={type}
        placeholder={placeholder}
      />
      <Field.ErrorText>{errorText}</Field.ErrorText>
    </Field.Root>
  );
}
