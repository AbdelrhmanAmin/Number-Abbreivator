const abbreviator = (amount) => {
  amount = parseFloat(amount);
  if (isNaN(amount)) return amount;
  const THOUSAND = 1000;
  const MILLION = 1000000;
  const BILLION = 1000000000;
  const TRILLION = 1000000000000;
  const ZILLION = 1000000000000000;
  const isNegative = amount < 0;
  const NUM = Math.abs(amount);
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
  const base100 = Number(`${base}00`);
  const base10 = Number(`${base}0`);
  let abbrev;
  if (number >= base100) {
    abbrev = NUM.slice(0, 3);
  } else if (number >= base10) {
    abbrev = NUM.slice(0, 2);
  } else {
    abbrev = NUM.slice(0, 1);
  }
  return `${abbrev}${sign}`;
};

export default abbreviator;
