"use client";

import { authStore } from "@/store/authStore";
import { MyProfileContentList } from "@/modules/userProfileContent/components/MyProfileContentList";

export function MyProfileContent() {
  const { user } = authStore();
  return <MyProfileContentList profileId={user?.profile?.id} />;
}
