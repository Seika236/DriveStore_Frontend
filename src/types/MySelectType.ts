export interface SelectCollectionItemType {
  label: string;
  value: string;
}

export type SelectCollectionType = SelectCollectionItemType[];

export interface SelectChangeDetails {
  value: string[]; // массив выбранных значений
}
