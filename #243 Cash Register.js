function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let change = [];
  let totalCID = cid.reduce((total, [, amount]) => total + amount, 0);

  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      const currency = cid[i][0];
      const currencyAmount = cid[i][1];
      const currencyValue = currencyValues[currency];
      let currencyCount = Math.floor(currencyAmount / currencyValue);
      let currencySum = 0;

      while (changeDue >= currencyValue && currencyCount > 0) {
        changeDue -= currencyValue;
        changeDue = Math.round(changeDue * 100) / 100;
        currencyCount--;
        currencySum += currencyValue;
      }

      if (currencySum > 0) {
        change.push([currency, currencySum]);
        totalCID -= currencySum;
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: change };
    }
  }
}
