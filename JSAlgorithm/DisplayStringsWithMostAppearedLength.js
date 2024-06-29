function DisplayStringsWithMostAppearedLength(arrayOfString) {
    const arrayOfStringMap = new Map();
    for (let i = 0; i < arrayOfString.length; i++) {
        let str = arrayOfString[i];
        let lengthOfStr = str.length;
        arrayOfStringMap.set(lengthOfStr, (arrayOfStringMap.get(lengthOfStr) || 0 ) + 1);
    }

    const mostAppearedLength = Math.max(...arrayOfStringMap.values());
    const displayedStrs = arrayOfString.filter(str => arrayOfStringMap.get(str.length) === mostAppearedLength);

    return displayedStrs;
}

module.exports = DisplayStringsWithMostAppearedLength;