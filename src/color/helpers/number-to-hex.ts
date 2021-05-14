export function numberToHex(
  value: number,
  digits: number = 2,
): string {
  return value.toString(16).padStart(digits, '0');
}
