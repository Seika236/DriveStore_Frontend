"use client";
import { useState } from "react";
import { MyActionButtonList } from "@/components/MyActionButtonList";
import { ActionButtonType } from "../../../types/ActionButtonType";
import { Box } from "@chakra-ui/react";
import { UseDialog } from "@/hooks/useDialog";
import { MyCreateBrandDialog } from "@/modules/brand/components/modals/MyCreateBrandDialog";
import { MyUpdateBrandDialog } from "@/modules/brand/components/modals/MyUpdateBrandDialog";
import { MyDeleteBrandDialog } from "@/modules/brand/components/modals/MyDeleteBrandDialog";

export function MyBrandPanel() {
  const { isVisible: isVisibleCreateDialog, onOpenDialog: onOpenCreateDialog } =
    UseDialog();
  const { isVisible: isVisibleDeleteDialog, onOpenDialog: onOpenDeleteDialog } =
    UseDialog();
  const { isVisible: isVisibleUpdateDialog, onOpenDialog: onOpenUpdateDialog } =
    UseDialog();

  const [buttons] = useState<ActionButtonType[]>([
    {
      name: "create brand",
      onClick: () => {
        onOpenCreateDialog();
      },
    },
    {
      name: "update brand",
      onClick: () => {
        onOpenUpdateDialog();
      },
    },
    {
      name: "delete brand",
      onClick: () => {
        onOpenDeleteDialog();
      },
    },
  ]);

  return (
    <Box>
      <MyActionButtonList buttons={buttons} />
      <MyCreateBrandDialog
        isVisible={isVisibleCreateDialog}
        onOpenChange={onOpenCreateDialog}
      />
      <MyUpdateBrandDialog
        isVisible={isVisibleUpdateDialog}
        onOpenChange={onOpenUpdateDialog}
      />
      <MyDeleteBrandDialog
        isVisible={isVisibleDeleteDialog}
        onOpenChange={onOpenDeleteDialog}
      />
    </Box>
  );
}
