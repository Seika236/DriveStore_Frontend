"use client";
import "@/styles/globals.css";
import { Skeleton } from "@chakra-ui/react";
import { MyContainer } from "@/modules/navbar/UI/MyContainer";
import { MyMessageDrawer } from "@/modules/driwers";
import { MyFavoriteDrawer } from "@/modules/driwers/components/MyFavoriteDriwer";
import { Suspense } from "react";
import { MyHeader } from "@/components/MyHeader";
import { MySpinner } from "@/ui/MySpinner";

export default function RootLayout({ children }) {
  return (
    <>
      <Suspense fallback={<Skeleton h={"100px"} />}>
        <MyHeader />
      </Suspense>

      <main>
        <Suspense fallback={<MySpinner />}>
          <MyContainer>
            {children}
            <MyMessageDrawer />
            <MyFavoriteDrawer />
          </MyContainer>
        </Suspense>
      </main>
    </>
  );
}
