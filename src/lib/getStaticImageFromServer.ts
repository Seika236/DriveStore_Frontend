export function getStaticImageFromServer(image: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}/${image}`;
}
