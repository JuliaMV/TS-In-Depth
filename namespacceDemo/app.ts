/// <reference path="utility-functions.ts"/>

const result1 = Utility.Fees.calculateLateFee(4);

const result2 = Utility.maxBooksAllowed(4);
console.log(result1, result2);

import util = Utility.Fees;
const result3 = util.calculateLateFee(0);
console.log(result3);
