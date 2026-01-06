import { IType } from "../../../types/models/IType";

export function transformTypeResponse(result: Object, type: IType) {
  const categoryName = type.category.name + "%" + type.category.id;

  if (categoryName in result) {
    result[categoryName].push({ id: type.id, name: type.name });
    return result;
  } else {
    result[categoryName] = [{ id: type.id, name: type.name }];
    return result;
  }
}
