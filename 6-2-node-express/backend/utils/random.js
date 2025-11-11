export function getRandomInt(max) {
  if (typeof max !== "number" || max <= 0) {
    throw new Error("max must be a positive number");
  }
  return Math.floor(Math.random() * max);
}
