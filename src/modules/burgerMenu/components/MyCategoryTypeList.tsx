import { Box } from "@chakra-ui/react";
import { CategoryTypeListItem } from "@/modules/burgerMenu/types/CategoryTypeListItem";
import { MyCategoryTypeListItem } from "@/modules/burgerMenu/UI/MyCategoryTypeListItem";
import { IType } from "../../../types/models/IType";
import { ICategory } from "../../../types/models/ICategory";
import { UseFilter } from "@/hooks/useFilter";

type Props = {
  categoryTypeList: CategoryTypeListItem;
};

export function MyCategoryTypeList({ categoryTypeList }: Props) {
  const [category, types] = categoryTypeList;
  const [categoryName, categoryId] = category.split("%");
  const { handleSearch } = UseFilter();

  const onTypeClick = (type: Omit<IType, "category">) => {
    handleSearch({ term: type.name + "%" + type.id, query: "type" });
  };

  const onCategoryClick = (category: ICategory) => {
    handleSearch({
      term: category.name + "%" + category.id,
      query: "category",
    });
  };
  return (
    <Box
      as={"ul"}
      display={"grid"}
      gridTemplateRows={`repeat(${types.length}, 1fr)`}
      bg={{ base: "white", _dark: "gray.900" }}
      borderRadius="md"
      boxShadow={{ base: "sm", _dark: "none" }}
      border={{ base: "1px solid", _dark: "none" }}
      borderColor="gray.100"
    >
      <Box as={"li"}>
        <MyCategoryTypeListItem
          onClick={() =>
            onCategoryClick({ name: categoryName, id: +categoryId })
          }
          name={categoryName}
          isCategory={true}
        />
      </Box>
      {types.map((type, index) => (
        <Box
          key={type.id}
          as={"li"}
          listStyle="none"
          borderBottomColor={{ base: "gray.50", _dark: "whiteAlpha.50" }}
        >
          <MyCategoryTypeListItem
            onClick={() => onTypeClick(type)}
            name={type.name}
            isCategory={false}
          />
        </Box>
      ))}
    </Box>
  );
}
