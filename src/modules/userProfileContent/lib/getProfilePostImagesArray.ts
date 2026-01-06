import { IImage } from "../../../types/models/IImage";

export function getProfilePostImagesArray(images: IImage[]) {
  return Array.from(
    { length: 5 },
    (_, index) => images?.[index]?.image_name || "",
  );
}
