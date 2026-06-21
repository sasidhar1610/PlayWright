let animals : string[] = ["Goat", "Lion", "Kangroo", "Elephant", "Deer", "Fox", "Moneky", "Horse", "Zebra", "Tiger", "Cheetha", "Bear", "Snake"];
console.log(animals);

//Deleting any elements based on index and count
animals.splice(3, 4);
console.log(animals);

//Deleting any elements based on index 4 till end
animals.splice (4);
console.log(animals);

//Deleting any elements based on index 3 till 0 elements
animals.splice (3, 0);
console.log(animals);

//Deleting any elements based on index 3 till only one(1) and adding three elements from index 3
animals.splice (3, 1, "Hen", "Yax", "Cow"   );
console.log(animals);