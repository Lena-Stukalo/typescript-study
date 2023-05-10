"use strict";
function fizzBuzz(countEnd, rules) {
    for (let i = 1; i <= countEnd; i++) {
        let output = '';
        for (const key in rules) {
            if (i % rules[key] === 0) {
                output += key;
            }
        }
        output ? console.log(output) : console.log(i);
    }
}
fizzBuzz(100, { Fizz: 3, Buzz: 5 });
//# sourceMappingURL=fizzbuss.js.map