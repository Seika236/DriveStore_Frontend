"use client";

import { MySearchSuggestions } from "@/modules/searchSuggestions";
import { Button, Flex, Grid, Heading } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { UseFilter } from "@/hooks/useFilter";
import { FilterChip } from "@/modules/infiniteListingFeed/UI/MyFilterChip";

export function MyFilterGroup() {
  const searchParams = useSearchParams();
  const { handleSearch, resetFilters } = UseFilter();
  const brand = searchParams.get("brand");
  const type = searchParams.get("type");
  const category = searchParams.get("category");

  const onResetBrand = () => {
    handleSearch({ term: "", query: "brand" });
  };

  const onResetCategory = () => {
    handleSearch({ term: "", query: "category" });
  };

  const onResetType = () => {
    handleSearch({ term: "", query: "type" });
  };

  const onResetAll = () => {
    resetFilters();
  };

  return (
    <Grid rowGap={4} px={4}>
      <Heading size="lg">Фильтры</Heading>

      <Flex wrap="wrap" gap={3} align="center">
        {brand && (
          <FilterChip title={brand.split("%")[0]} onClick={onResetBrand} />
        )}

        {category && (
          <FilterChip
            title={category.split("%")[0]}
            onClick={onResetCategory}
          />
        )}

        {type && (
          <FilterChip title={type.split("%")[0]} onClick={onResetType} />
        )}

        {(brand || category || type) && (
          <Button
            variant="outline"
            colorPalette={"orange"}
            size="sm"
            onClick={onResetAll}
            borderRadius="full"
            fontSize="xs"
            textTransform="uppercase"
          >
            Сбросить всё
          </Button>
        )}
      </Flex>

      <MySearchSuggestions description={"поиск по объявлениям"} />
    </Grid>
  );
}
