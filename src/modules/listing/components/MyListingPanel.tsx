"use client";
import { useState } from "react";
import { MyActionButtonList } from "@/components/MyActionButtonList";
import { ActionButtonType } from "../../../types/ActionButtonType";
import { Box } from "@chakra-ui/react";
import { UseDialog } from "@/hooks/useDialog";
import { MyCreateListingDialog } from "@/modules/listing/components/modals/MyCreateListingDialog";
import { MyUpdateListingDialog } from "@/modules/listing/components/modals/MyUpdateListingDialog";
import { MyDeleteListingDialog } from "@/modules/listing/components/modals/MyDeleteListingDialog";

export function MyListingPanel() {
  const { isVisible: isVisibleCreateDialog, onOpenDialog: onOpenCreateDialog } =
    UseDialog();
  const { isVisible: isVisibleDeleteDialog, onOpenDialog: onOpenDeleteDialog } =
    UseDialog();
  const { isVisible: isVisibleUpdateDialog, onOpenDialog: onOpenUpdateDialog } =
    UseDialog();

  const [buttons] = useState<ActionButtonType[]>([
    {
      name: "create listing",
      onClick: () => {
        onOpenCreateDialog();
      },
    },
    {
      name: "update listing",
      onClick: () => {
        onOpenUpdateDialog();
      },
    },
    {
      name: "delete listing",
      onClick: () => {
        onOpenDeleteDialog();
      },
    },
  ]);

  return (
    <Box>
      <MyActionButtonList buttons={buttons} />
      <MyCreateListingDialog
        isVisible={isVisibleCreateDialog}
        onOpenChange={onOpenCreateDialog}
      />
      <MyUpdateListingDialog
        isVisible={isVisibleUpdateDialog}
        onOpenChange={onOpenUpdateDialog}
      />
      <MyDeleteListingDialog
        isVisible={isVisibleDeleteDialog}
        onOpenChange={onOpenDeleteDialog}
      />
    </Box>
  );
}
