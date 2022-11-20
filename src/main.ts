import sum from "./sum";

interface Name {
  fName: string;
  lName: string;
}

const name: Name = {
  fName: "Makesh",
  lName: "Kumar",
};

const res = sum(1, 7);

console.log(`${name.fName} + ${name.lName} + ${res}`);
