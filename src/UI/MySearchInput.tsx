"use client";
import { ChangeEvent } from "react";
import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

export function MySearchInput({ onChange, placeholder, value }: Props) {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </InputGroup>
  );
}
