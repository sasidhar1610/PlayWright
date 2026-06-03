const mydata = "Manohar" //declare

console.log(mydata)

//mydata = "hyderabad"  //reassigning -->TypeError: Assignment to constant variable.

//console.log(mydata)

//const mydata = "hyderabad" //redeclartion  -->SyntaxError: Identifier 'mydata' has already been declared

//console.log(mydata)

{
    console.log(mydata) //accessing inside of a block
    const m = "blue"
    console.log(m) //declare inside of a block and accessing inside of a block
}

//console.log(m) //declare inside of a block and accessing outside of a block -->ReferenceError: m is not defined 