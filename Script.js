"use strict";

// alert("Let's have A look");
// console.log(55 % 2);

function calcAvg(one, two, three) {
    return (one + two + three) / 3
}

function checkWinner(avg1, avg2) {
    if (avg1 >= avg2 * 2) {
        console.log("First team won")
    }
    else if (avg2 >= avg1 * 2) {
        console.log("Second team won")
    }
    else {
        console.log("its A Draw")
    }
}

checkWinner(calcAvg(44, 23, 71), calcAvg(65, 54, 49))
checkWinner(calcAvg(85, 54, 41), calcAvg(23, 34, 27))

