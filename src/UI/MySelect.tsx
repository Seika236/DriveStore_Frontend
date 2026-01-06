"use client";

import { createListCollection, Portal, Select } from "@chakra-ui/react";
import {
  SelectChangeDetails,
  SelectCollectionType,
} from "../types/MySelectType";

type Props = {
  label: string;
  isVisibleLabel?: boolean;
  placeholder: string;
  collection: SelectCollectionType;
  onChange: (details: SelectChangeDetails) => void;
};

export const MySelect = ({
  collection,
  placeholder,
  label,
  isVisibleLabel = false,
  onChange,
}: Props) => {
  const frameworks = createListCollection({
    items: collection,
  });

  return (
    <Select.Root
      onValueChange={onChange}
      collection={frameworks}
      size="md"
      width="320px"
    >
      <Select.HiddenSelect />
      {isVisibleLabel && <Select.Label>{label}</Select.Label>}

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
