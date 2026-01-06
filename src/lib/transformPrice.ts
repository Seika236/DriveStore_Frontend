export function transformPrice(price: string): string {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
