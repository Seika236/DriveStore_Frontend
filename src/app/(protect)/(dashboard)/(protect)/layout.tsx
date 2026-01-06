"use client";

import "@/styles/globals.css";
import { authStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MySpinner } from "@/ui/MySpinner";

export default function RootLayout({ children }) {
  const { isAuth, isLoading } = authStore();

  const router = useRouter();

  useEffect(() => {
    if (!isAuth && !isLoading) {
      router.replace("/");
    }
  }, [isLoading, isAuth]);

  return <>{isLoading ? <MySpinner /> : children}</>;
}
