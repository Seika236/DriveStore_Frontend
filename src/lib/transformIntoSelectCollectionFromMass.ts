import { SelectCollectionType } from "../types/MySelectType";

type DataType = string[];

export function transformIntoSelectCollectionFromMass(
  data: DataType,
): SelectCollectionType {
  return data.map((item) => {
    return { label: item, value: item };
  });
}
