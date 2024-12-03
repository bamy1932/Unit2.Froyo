const userInputString = prompt(
  "Please place your froyo order!",
  "strawberry, vanilla, chocolate, etc."
);

const order = userInputString.split(",");
// console.log(order);
const noSpaces = order.map((string) => string.trim());
const count = {};
let flavor;
for (const flavor of noSpaces) {
  if (count[flavor]) {
    count[flavor] += 1;
  } else {
    count[flavor] = 1;
  }
}

console.log(count);
