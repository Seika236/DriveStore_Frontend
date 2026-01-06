import { getStaticImageFromServer } from "./getStaticImageFromServer";

export function getPreviewImage(
  previewImg: File | null,
  userImg: string | null,
) {
  if (!previewImg && !userImg) return null;

  if (previewImg) {
    return URL.createObjectURL(previewImg);
  }

  return getStaticImageFromServer(userImg);
}
