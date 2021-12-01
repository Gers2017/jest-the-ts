export function tsnacci(n: number): number {
  if (n <= 0) return 0;
  else if (n <= 2) return 1;
  else return tsnacci(n - 2) + tsnacci(n - 1);
}
