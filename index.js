const THOUSAND = 1000;
const MILLION = 1000000;
const BILLION = 1000000000;
const TRILLION = 1000000000000;
const ZILLION = 1000000000000000;

const abbreviator = (amount) => {
  const validatedAmount = validateInput(amount); // validate input is a valid number and parse it.
  const isNegative = validatedAmount < 0;
  const NUM = Math.abs(validatedAmount); // remove the negative from the number
  const isThousand = () => {
    if (NUM >= THOUSAND) {
      return evaluator(NUM, THOUSAND, "k");
    }
    return false;
  };
  const isMillion = () => {
    if (NUM >= MILLION) {
      return evaluator(NUM, MILLION, "m");
    }
    return false;
  };
  const isBillion = () => {
    if (NUM >= BILLION) {
      return evaluator(NUM, BILLION, "b");
    }
    return false;
  };
  const isTrillion = () => {
    if (NUM >= TRILLION) {
      return evaluator(NUM, TRILLION, "t");
    }
    return false;
  };
  const isZillioniare = () => {
    if (NUM >= ZILLION) {
      return "⭐⭐INFINITY⭐⭐";
    }
    return false;
  };
  const pipe =
    isZillioniare() ||
    isTrillion() ||
    isBillion() ||
    isMillion() ||
    isThousand() ||
    NUM;
  return isNegative ? "-" + pipe : pipe;
};

const evaluator = (number, base, sign) => {
  const NUM = Math.floor(number).toString();
  const base100 = Number(`${base}00`); // 1000(00)
  const base10 = Number(`${base}0`); // 1000(0)
  let abbrev;
  if (number >= base100) { // 200000 >= 100000
    abbrev = NUM.slice(0, 3); // num: 200000  abbrev: 200
  } else if (number >= base10) { // 20000 >= 10000
    abbrev = NUM.slice(0, 2); // num: 20000 abbrev: 20
  } else {
    abbrev = NUM.slice(0, 1); // num: 2000 abbrev: 2
  }
  return `${abbrev}${sign}`; // 2k
};

const validateInput = (input) => {
  let output = input;
  if (typeof input === "string") {
    output = parseFloat(input);
    if (isNaN(output)) {
      throw new Error("Please provide a valid number");
    }
  }
  return Number(output);
};


const x = abbreviator("10000")
console.log(x)
