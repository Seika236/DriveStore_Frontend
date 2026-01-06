"use client";
import "@/styles/globals.css";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UseCheckAuth } from "@/hooks/useCheckAuth";

export default function RootLayout({ children }) {
  UseCheckAuth();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
  );
}
