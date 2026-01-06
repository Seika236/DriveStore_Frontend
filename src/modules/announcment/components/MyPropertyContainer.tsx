import { Box, Button, Flex, Grid, Heading, IconButton } from "@chakra-ui/react";
import { TrashIcon } from "@/assets/icons/trash-icon";
import { MyInput } from "@/ui/MyInput";
import { AddPlusCircleIcon } from "@/assets/icons/add-plus-circle-icon";
import { CreatePropertyType } from "@/modules/announcment/types/CreatePropetyType";
import { ChangeEvent } from "react";

type Props = {
  isVisible: boolean;
  setProperties: (properties: CreatePropertyType[]) => void;
  onTrashButtonClick: () => void;
  properties: CreatePropertyType[];
};

export function MyPropertyContainer({
  isVisible,
  onTrashButtonClick,
  properties,
  setProperties,
}: Props) {
  const onAddPropertyItem = () => {
    const lastProperty = properties.at(-1);
    const newProperty: CreatePropertyType = {
      id: lastProperty?.id + 1 || 1,
      description: "",
      title: "",
    };
    setProperties([...properties, newProperty]);
  };

  const onDeletePropertyItem = (id: number) => {
    setProperties(
      properties.reduce((mass: CreatePropertyType[], item) => {
        item.id !== id
          ? mass.push({
              id: mass.length + 1,
              title: item.title,
              description: item.description,
            })
          : mass;
        return mass;
      }, []),
    );
  };

  const onChangeKey = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const newKey = event.target.value;

    const property = properties[id - 1];
    properties[id - 1] = { ...property, title: newKey };

    setProperties(properties);
  };

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const newValue = event.target.value;

    const property = properties[id - 1];
    properties[id - 1] = { ...property, description: newValue };

    setProperties(properties);
  };

  return (
    isVisible && (
      <Grid rowGap={"10px"} mt={"20px"}>
        <Flex justifyContent={"space-between"}>
          <Heading>Описание</Heading>
          <IconButton
            onClick={onTrashButtonClick}
            aria-label="Search database"
            variant="outline"
            size={"sm"}
          >
            <TrashIcon />
          </IconButton>
        </Flex>
        <Grid rowGap={"15px"} as={"ul"}>
          {properties.map((property) => {
            return (
              <Box as={"li"} key={property.id}>
                <Grid
                  gridTemplateColumns={"auto 1fr 3fr"}
                  columnGap={"10px"}
                  alignItems={"center"}
                >
                  <IconButton
                    variant={"ghost"}
                    onClick={() => onDeletePropertyItem(property.id)}
                    color={"red.600"}
                  >
                    <TrashIcon />
                  </IconButton>
                  <MyInput
                    type={"text"}
                    onChange={(event) => onChangeKey(event, property.id)}
                    label={`название ${property.id} ${property.title}`}
                    placeholder={`название ${property.id}`}
                  />
                  <MyInput
                    type={"text"}
                    onChange={(event) => onChangeValue(event, property.id)}
                    label={`значение ${property.id} ${property.description}`}
                    placeholder={`значение ${property.id}`}
                  />
                </Grid>
              </Box>
            );
          })}
          <Button
            type={"button"}
            variant={"outline"}
            colorPalette={"orange"}
            onClick={onAddPropertyItem}
          >
            <AddPlusCircleIcon /> Добавить ещё
          </Button>
        </Grid>
      </Grid>
    )
  );
}
