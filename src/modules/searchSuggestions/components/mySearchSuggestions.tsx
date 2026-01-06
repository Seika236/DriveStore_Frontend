"use client";
import { MySearchInput } from "../../../UI/MySearchInput";
import { ChangeEvent } from "react";
import { Box } from "@chakra-ui/react";
import { filterStore } from "@/store/filterStore";

type Props = {
  description: string;
};

export function MySearchSuggestions({ description }: Props) {
  const { searchValue, setSearchValue } = filterStore();
  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box position={"relative"}>
      <MySearchInput
        onChange={onChangeSearchValue}
        placeholder={description}
        value={searchValue}
      />
    </Box>
  );
}
