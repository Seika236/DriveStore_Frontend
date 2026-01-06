"use client";

import { Portal, Select, createListCollection, Field } from "@chakra-ui/react";
import { SelectCollectionType } from "../types/MySelectType";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  collection: SelectCollectionType;
  size: "sm" | "md" | "lg";
  label: string;
  isVisibleLabel?: boolean;
  placeholder?: string;
  isMultiple?: boolean;
  register: UseFormRegisterReturn;
  maxWidth?: number;
  errorText?: string;
};

export const MySelectWidthDialog = ({
  collection,
  size,
  label,
  isVisibleLabel,
  placeholder,
  register,
  maxWidth,
  errorText,
  isMultiple = false,
}: Props) => {
  const frameworks = createListCollection({
    items: collection,
  });

  return (
    <Field.Root invalid={!!errorText} maxWidth={`${maxWidth}px`}>
      <Select.Root
        {...register}
        multiple={isMultiple}
        collection={frameworks}
        size={size}
      >
        <Select.HiddenSelect />
        {isVisibleLabel && <Select.Label>{label}</Select.Label>}
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={placeholder} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => {
              return (
                <Select.Item item={framework} key={framework.value}>
                  {framework.label}
                  <Select.ItemIndicator key={framework.value} />
                </Select.Item>
              );
            })}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
      <Field.ErrorText>{errorText}</Field.ErrorText>
    </Field.Root>
  );
};
