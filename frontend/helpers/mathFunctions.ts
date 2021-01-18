export function randomNumberGenerator(seed = 1337) {
  let counter = seed;
  return function random() {
    const x = Math.sin(counter++) * 10000;
    return x - Math.floor(x);
  };
}
