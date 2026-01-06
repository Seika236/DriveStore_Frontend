import { SelectCollectionType } from "../../../types/MySelectType";

type DataType = {
  id: number;
  name: string;
};

export function transformIntoSelectCollection(data: DataType[]) {
  const result: SelectCollectionType = data.map((dataItem) => {
    return { label: dataItem.name, value: dataItem.name };
  });

  return result;
}
