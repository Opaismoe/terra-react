export default function randomInteger(min = 4, max = 4) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}