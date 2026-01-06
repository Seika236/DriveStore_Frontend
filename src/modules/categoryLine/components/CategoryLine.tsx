import { Box } from "@chakra-ui/react";
import { CategoryList } from "@/modules/categoryLine/components/CategoryList";
import { useQuery } from "@tanstack/react-query";
import GetCategoryService from "@/modules/categoryLine/services/getCategoryService";
import { useEffect } from "react";
import { UseToaster } from "@/hooks/useToaster";

export function CategoryLine() {
  const { data, error } = useQuery({
    queryKey: ["fetch:categories"],
    queryFn: GetCategoryService.getAllCategories,
    select: (data) => data.data,
  });
  const { errorMassage } = UseToaster();

  useEffect(() => {
    if (error?.message) {
      errorMassage("не удалось загрузить категории");
    }
  }, [error?.message]);

  return (
    <Box w={"full"}>
      <Box>
        <CategoryList categories={data || []} />
      </Box>
    </Box>
  );
}
