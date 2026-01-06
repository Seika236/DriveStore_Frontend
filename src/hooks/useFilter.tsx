"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function UseFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = ({ term, query }: { term: string; query: string }) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(query, term);
    } else {
      params.delete(query);
    }
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const resetFilters = () => {
    router.push("/", { scroll: false });
  };

  return {
    handleSearch,
    resetFilters,
  };
}
