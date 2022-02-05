const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function newBatteries () {
// newBatteries = (previous, current) => previous + current;
// return batteryBatches.reduce(newBatteries);
// }

// console.log(batteryBatches.reduce(newBatteries));

// function newBatteries () {
//     let sum = batteryBatches.reduce(function (previous, current) {
//         console.log(previous)
//     let add = current + previous;
//     }, 0)
// }

const totalBatteries = batteryBatches.reduce(function(previous, current) {
    return previous + current
}
)