"use client";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { MyAdminLink } from "@/modules/admin/UI/MyAdminLink";

type Props = {
  links: string[];
};

export function MyAdminList({ links }: Props) {
  return (
    <Box as={"ul"} display={"grid"} rowGap={3}>
      {links.map((link) => {
        return (
          <Box as={"li"} key={link}>
            <MyAdminLink link={link} />{" "}
          </Box>
        );
      })}
    </Box>
  );
}
