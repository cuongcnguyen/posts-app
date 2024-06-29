function SumOfTopTwo(arrayOfString){
    if (arrayOfString.length < 2) {
        throw new Error('Array must contain at least two elements');
    }
    let largestNum = -Infinity;
    let secondLargestNum = -Infinity;

    for (let num of arrayOfString) {
        if (num > largestNum) {
            secondLargestNum = largestNum;
            largestNum = num;            
        } else if (num > secondLargestNum) {
            secondLargestNum = num;
        }
    }
    const finalSum = largestNum + secondLargestNum;
    return finalSum;
}
module.exports = SumOfTopTwo;