export function yearToStringFromDate(timestamp: Date) {
  return new Date().getFullYear() - new Date(timestamp).getFullYear();
}
