let animals1 : string[] = ["Goat", "Lion", "Kangroo", "Elephant", "Deer", "Fox", "Moneky", "Horse", "Zebra", "Tiger", "Cheetha", "Bear", "Snake"];
console.log(animals1);

for (let x of animals1) //priniting each and every individual elements using for of
{
    console.log(x);
}
let animals2 :string[] = animals1.reverse(); //storing reverse of an array
console.log(animals2);

for (let y of animals2) //priniting each and every individual elements using for of
{
    console.log(y);
}