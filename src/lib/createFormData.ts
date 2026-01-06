import { constants } from "@/modules/userPost/constants";

export function createFormData(
  dataObj: Record<string, string | Object>,
  images: File[],
) {
  const formData = new FormData();
  Object.entries(dataObj).forEach((data) => {
    const key = data[0];
    const value = data[1];

    if (typeof value === "object") formData.set(data[0], JSON.stringify(value));
    else formData.append(key, value);
  });

  images.forEach((imageFile) => {
    formData.append(constants.IMAGES_REQUEST_FLAG, imageFile);
  });

  return formData;
}
