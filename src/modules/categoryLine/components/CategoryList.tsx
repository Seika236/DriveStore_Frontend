import { Box } from "@chakra-ui/react";
import { CategoryItem } from "@/modules/categoryLine/UI/CategoryItem";
import { ICategory } from "../../../types/models/ICategory";
import { UseFilter } from "@/hooks/useFilter";

type Props = {
  categories: ICategory[];
};

export function CategoryList({ categories }: Props) {
  const { handleSearch } = UseFilter();

  const onCategoryItemClick = (category: ICategory) => {
    handleSearch({
      term: category.name + "%" + category.id,
      query: "category",
    });
  };

  return (
    <Box as={"ul"} display={"flex"} alignItems={"center"}>
      {categories.map((category) => {
        return (
          <Box
            onClick={() => onCategoryItemClick(category)}
            key={category.name}
            as={"li"}
          >
            <CategoryItem categoryName={category.name} />
          </Box>
        );
      })}
    </Box>
  );
}
