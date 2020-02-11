import displayMyNameAndAge, { displayMyName, displayMyAge } from "./otherfiler";

const user = {
  name: "Kueny",
  age: 20
};

const nameAndAge = displayMyNameAndAge(user);
const name = displayMyName(user);
const age = displayMyAge(user);

console.log(nameAndAge);
console.log(name);
console.log(age);
