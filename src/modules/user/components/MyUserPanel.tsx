"use client";
import { useState } from "react";
import { MyActionButtonList } from "@/components/MyActionButtonList";
import { ActionButtonType } from "../../../types/ActionButtonType";
import { Box } from "@chakra-ui/react";
import { UseDialog } from "@/hooks/useDialog";
import { MyDeleteUserDialog } from "@/modules/user/components/modals/MyDeleteUserDialog";
import { MyAddRoleDialog } from "@/modules/user/components/modals/MyAddRoleDialog";
import { MyRemoveRoleDialog } from "@/modules/user/components/modals/MyRemoveRoleDialog";

export function MyUserPanel() {
  const {
    isVisible: isVisibleAddRoleDialog,
    onOpenDialog: onOpenAddRoleDialog,
  } = UseDialog();
  const { isVisible: isVisibleDeleteDialog, onOpenDialog: onOpenDeleteDialog } =
    UseDialog();
  const {
    isVisible: isVisibleRemoveRoleDialog,
    onOpenDialog: onOpenRemoveRoleDialog,
  } = UseDialog();

  const [buttons] = useState<ActionButtonType[]>([
    {
      name: "add role",
      onClick: () => {
        onOpenAddRoleDialog();
      },
    },
    {
      name: "remove role",
      onClick: () => {
        onOpenRemoveRoleDialog();
      },
    },
    {
      name: "delete user",
      onClick: () => {
        onOpenDeleteDialog();
      },
    },
  ]);

  return (
    <Box>
      <MyActionButtonList buttons={buttons} />
      <MyRemoveRoleDialog
        isVisible={isVisibleRemoveRoleDialog}
        onOpenChange={onOpenRemoveRoleDialog}
      />
      <MyAddRoleDialog
        isVisible={isVisibleAddRoleDialog}
        onOpenChange={onOpenAddRoleDialog}
      />
      <MyDeleteUserDialog
        isVisible={isVisibleDeleteDialog}
        onOpenChange={onOpenDeleteDialog}
      />
    </Box>
  );
}
