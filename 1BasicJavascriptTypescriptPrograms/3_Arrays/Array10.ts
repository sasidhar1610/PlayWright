let fancynums : number[] = [56, 9, -10, 78, 34, -17, 61]

//console.log(fancynums.sort()) //incorrect sorting

console.log(fancynums.sort((a, b) => a-b)) //ptints in ascending order
console.log(fancynums.sort((a, b) => b-a)) //ptints in descending order