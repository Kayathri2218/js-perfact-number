//5.Design a method to return how many perfect numbers are there in the array.

//  6, 28, 496, 8128, 33550336

let arr = [6, 2, 15, 28, 496, 8128, 10];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 1; j <= arr[i] / 2; j++) {
        if (arr[i] % j === 0) {
            sum += j;
        }
    }
    if (sum === arr[i]) {
        count++;
    }
}
console.log(count);