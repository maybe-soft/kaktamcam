export default function pickRandom<T = unknown>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
