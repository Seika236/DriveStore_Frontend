"use client";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { MyBrandList } from "@/modules/brandList/components/MyBrandList";
import { MyBrandDialog } from "@/modules/brandList/components/MyBrandDialog";
import { useQuery } from "@tanstack/react-query";
import GetBrandService from "@/modules/brandList/services/getBrandService";

export function MyBrandContainer() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["fetch:get/all/brands"],
    queryFn: GetBrandService.getAllBrands,
    select: (data) => data.data,
  });

  const onShowBrandsModal = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <Box mt={2}>
      <MyBrandList
        isVisibleDefaultBrand={true}
        brands={data || []}
        onDefaultBrandClick={onShowBrandsModal}
      />
      <MyBrandDialog isVisible={isVisible} onOpenChange={onShowBrandsModal} />
    </Box>
  );
}
