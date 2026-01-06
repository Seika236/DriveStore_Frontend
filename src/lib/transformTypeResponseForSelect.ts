import { IType } from "../types/models/IType";

export function transformTypeResponseForSelect(result: Object, type: IType) {
  const categoryName = type.category.name;

  if (categoryName in result) {
    result[categoryName].push(type.name);
    return result;
  } else {
    result[categoryName] = [type.name];
    return result;
  }
}
