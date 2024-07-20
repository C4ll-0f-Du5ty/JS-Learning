"use strict";

// alert("Let's have A look");
// console.log(55 % 2);

const calcAvg = (one, two, three) => (one + two + three) / 3

function checkWinner(avg1, avg2) {
    if (avg1 >= avg2 * 2) {
        console.log(`First team won with (${avg1} vs ${avg2})`)
    }
    else if (avg2 >= avg1 * 2) {
        console.log(`Second team won (${avg1} vs ${avg2})`)
    }
    else {
        console.log("its A Draw")
    }
}
console.log(calcAvg(44, 23, 71), calcAvg(65, 54, 49))
checkWinner(calcAvg(44, 23, 71), calcAvg(65, 54, 49))
console.log(calcAvg(85, 54, 41), calcAvg(23, 34, 27))
checkWinner(calcAvg(85, 54, 41), calcAvg(23, 34, 27))

