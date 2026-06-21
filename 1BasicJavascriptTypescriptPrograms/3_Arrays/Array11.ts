let fancynums : number[] = [56, 9, -10, 78, 34, -17, 61]

let adding7 : number[] = fancynums. map(x => x+7); // -- > these are arrow based functions used in function types

console.log(adding7)

let filter3 : number[] = fancynums. filter( v => v%3 != 0); //% -- > divide number and get the reminder

console.log(filter3);

