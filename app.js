const hasDuplicate2 = (arr) => (
    new Set(arr).size !== arr.length)

function vowelCount(str) {
    const lowerCasedStr = str.toLowerCase();
    const vowelArray = lowerCasedStr.match(/[aeiou]/g);
    const vowelMap = new Map();

    for (let char of vowelArray) {
        if (!vowelMap.has(char)) {
            vowelMap.set(char, 1);
        } else {
            vowelMap.set(char, vowelMap.get(char) + 1);
        }
    }
    return vowelMap;
}