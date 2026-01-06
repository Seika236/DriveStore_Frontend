"use client";
import { useState } from "react";
import { MyActionButtonList } from "@/components/MyActionButtonList";
import { ActionButtonType } from "../../../types/ActionButtonType";
import { Box } from "@chakra-ui/react";
import { UseDialog } from "@/hooks/useDialog";
import { MyCreateTypeDialog } from "@/modules/type/components/modals/MyCreateTypeDialog";
import { MyUpdateTypeDialog } from "@/modules/type/components/modals/MyUpdateTypeDialog";
import { MyDeleteTypeDialog } from "@/modules/type/components/modals/MyDeleteTypeDialog";

export function MyTypePanel() {
  const { isVisible: isVisibleCreateDialog, onOpenDialog: onOpenCreateDialog } =
    UseDialog();
  const { isVisible: isVisibleDeleteDialog, onOpenDialog: onOpenDeleteDialog } =
    UseDialog();
  const { isVisible: isVisibleUpdateDialog, onOpenDialog: onOpenUpdateDialog } =
    UseDialog();

  const [buttons] = useState<ActionButtonType[]>([
    {
      name: "create type",
      onClick: () => {
        onOpenCreateDialog();
      },
    },
    {
      name: "update type",
      onClick: () => {
        onOpenUpdateDialog();
      },
    },
    {
      name: "delete type",
      onClick: () => {
        onOpenDeleteDialog();
      },
    },
  ]);

  return (
    <Box>
      <MyActionButtonList buttons={buttons} />
      <MyCreateTypeDialog
        isVisible={isVisibleCreateDialog}
        onOpenChange={onOpenCreateDialog}
      />
      <MyUpdateTypeDialog
        isVisible={isVisibleUpdateDialog}
        onOpenChange={onOpenUpdateDialog}
      />
      <MyDeleteTypeDialog
        isVisible={isVisibleDeleteDialog}
        onOpenChange={onOpenDeleteDialog}
      />
    </Box>
  );
}
