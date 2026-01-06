"use client";
import { useState } from "react";
import { MyActionButtonList } from "@/components/MyActionButtonList";
import { ActionButtonType } from "../../../types/ActionButtonType";
import { Box, useDialog } from "@chakra-ui/react";
import { MyCreateCategoryDialog } from "@/modules/category/components/modals/MyCreateCategoryDialog";
import { MyUpdateCategoryDialog } from "@/modules/category/components/modals/MyUpdateCategoryDialog";
import { MyDeleteCategoryDialog } from "@/modules/category/components/modals/MyDeleteCategoryDialog";
import { UseDialog } from "@/hooks/useDialog";

export function MyCategoryPanel() {
  const { isVisible: isVisibleCreateDialog, onOpenDialog: onOpenCreateDialog } =
    UseDialog();
  const { isVisible: isVisibleDeleteDialog, onOpenDialog: onOpenDeleteDialog } =
    UseDialog();
  const { isVisible: isVisibleUpdateDialog, onOpenDialog: onOpenUpdateDialog } =
    UseDialog();

  const [buttons] = useState<ActionButtonType[]>([
    {
      name: "create category",
      onClick: () => {
        onOpenCreateDialog();
      },
    },
    {
      name: "update category",
      onClick: () => {
        onOpenUpdateDialog();
      },
    },
    {
      name: "delete category",
      onClick: () => {
        onOpenDeleteDialog();
      },
    },
  ]);

  return (
    <Box>
      <MyActionButtonList buttons={buttons} />
      <MyCreateCategoryDialog
        isVisible={isVisibleCreateDialog}
        onOpenChange={onOpenCreateDialog}
      />
      <MyDeleteCategoryDialog
        isVisible={isVisibleDeleteDialog}
        onOpenChange={onOpenDeleteDialog}
      />
      <MyUpdateCategoryDialog
        isVisible={isVisibleUpdateDialog}
        onOpenChange={onOpenUpdateDialog}
      />
    </Box>
  );
}
